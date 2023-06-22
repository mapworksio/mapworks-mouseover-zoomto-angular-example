import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Input,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {
    filter,
    firstValueFrom,
    map, Observable, switchMap,
    tap,
    throttleTime
} from 'rxjs';
import { AppConfig, APP_CONFIG } from '../app.config';
import {
    fromEvent,
    MapworksAnalysisModule,
    MapworksFeatureEvent,
    MapworksLayerSearchInput,
    MapworksMarkupEvent,
    MapworksMarkupModule,
    MapworksMeasureEvent,
    MapworksTreeLayerEntity
} from '../mapworks';
import { MapworksMapService } from '../mapworks-map.service';
import { MapPointMarker } from './map-point-marker.class';

@Component({
  selector: 'app-map-events-display-feature',
  template: `
    <span *ngIf="e$ | async as e"
      >{{ e.getFeature()?.attributes?.displayLayerName }} :
      {{ e.getFeature()?.getDisplayName() }}</span
    >
  `,
})
export class MapEventsDisplayFeatureComponent implements OnInit {
  @Input() eventFeature$!: Observable<MapworksFeatureEvent>;
  e$!: Observable<MapworksFeatureEvent>;
  constructor(private changeDetector: ChangeDetectorRef) { }
  ngOnInit() {
    this.e$ = this.eventFeature$?.pipe(
      // we force detectChanges() to get instantly responsive display of the mouseover
      tap(() => setTimeout(() => this.changeDetector.detectChanges(), 0))
    );
  }
}

/**
 * Component to display mouseover/tooltip/mouse-click information
 * and provide option to zoom-to random feature with a highlight marker.
 *
 * @note This component waits for the map to be ready and looks up the
 *       target layer itself. Alternately, the map could have been passed
 *       in as an input via an async pipe.
 */
@Component({
  selector: 'app-map-events-display',
  templateUrl: './map-events-display.component.html',
  styleUrls: ['./map-events-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class MapEventsDisplayComponent {

  readonly layer$: Observable<MapworksTreeLayerEntity>;

  readonly mouseoverFeature$: Observable<MapworksFeatureEvent>;
  readonly mouseTooltipFeature$: Observable<MapworksFeatureEvent>;
  readonly mouseClickFeature$: Observable<MapworksFeatureEvent>;
  public measureDistance$: string = '0';
  public selectedFeature: any = null;
  public moveFrom: any = null;
  public moveTo: any = null;

  private mapPointMarker?: MapPointMarker;

  private showLogging = false;

  public isModuleStarted: boolean = false;

  public isModuleMarkupStarted: boolean = false;

  constructor(
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    private mapService: MapworksMapService,
    private changeDetector: ChangeDetectorRef,
  ) {

    const map$ = mapService.mapService.map$;

    this.layer$ = map$.pipe(
      map(map_ => map_.getTree().findByReferenceId(appConfig.layerRef) as MapworksTreeLayerEntity),
    );

    /* we throttle these events (there are lots) and filter out any that
     * don't have a map feature associated with them */
    this.mouseoverFeature$ = map$.pipe(
      switchMap((map) => fromEvent(map, 'feature:mouseover')),
      filter((e) => e.isAnyFeature()),
      throttleTime(100)
    );

    this.mouseTooltipFeature$ = map$.pipe(
      switchMap((map) => fromEvent(map, 'feature:tooltip'))
    );

    this.mouseClickFeature$ = map$.pipe(
      switchMap((map) => fromEvent(map, 'feature:mouseclick'))
    );
  }

  async doZoomTo() {
    this.doRemoveMarker();

    const map = await firstValueFrom(this.mapService.mapService.map$);
    const layer = await firstValueFrom(this.layer$);

    if (!this.mapPointMarker) {
      this.mapPointMarker = new MapPointMarker(
        this.mapService.mapService.Studio!,
        map,
        layer
      );
    }

    // choose a random feature
    const from = Math.floor(Math.random() * 5000); // hard-coded for now

    /*
     * query the Mapworks server for "all" features starting from
     * a random offset
     */
    let options: MapworksLayerSearchInput = {
      input: [
        {
          layers: [layer],
          // filter: filter,
          // query: query,
          include: ['id'],
          size: 10,
          from,
        },
      ],
    };

    const result = await map.layerSearch(options);
    this.log('layerSearch', result);

    const feature = result?.data?.[0]?.data?.[0]; // XXX TODO Types

    const extent = feature?.extent;
    if (extent) {
      // zoom to (with animation), then highlight with marker
      map.animateTo({
        extent,
        targetScale: ((<any>layer).getMaxScale() + (<any>layer).getMinScale()) / 2,
        callback: () => {
          const location = map.getViewCenter();
          this.mapPointMarker?.placeMarker(location);
        },
      });
    }
  }

  doRemoveMarker() {
    this.mapPointMarker?.removeMarker();
  }

  async doIdentifyLayer() {
    const layer = await firstValueFrom(this.layer$);
    if (layer) {
      layer.identify();
    }
  }

  async toggleLayerVisibility() {
    const layer = await firstValueFrom(this.layer$);
    if (layer) {
      layer.setVisible(!layer.isVisible()).redraw();
    }
  }

  async toggleMeasureTool() {
    const map = await firstValueFrom(this.mapService.mapService.map$);
    const markupLayer = map.getTree().findByTitle('Markup Layer');
    const module = <MapworksAnalysisModule>map.getModule('analysis');
    module.setLayer(markupLayer);
    if (this.isModuleStarted) {
      // Stop this module's current (if active)
      module.stop();
      this.isModuleStarted = false;
    } else {
      this.isModuleStarted = true;
      // Perform a measurement by drawing a line or polygon on the map. false to exclude area in measurement
      module.measure(false);
      module.on('analysis:measure', (e: MapworksMeasureEvent) => {
        this.measureDistance$ = e?.feature.getLength().toFixed(3) ?? '0';
        e?.feature.setFields({ 'Title': `${this.measureDistance$} m` })
      });
    }
  }

  async toggleMoveTool() {
    this.doIdentifyLayer();
    const map = await firstValueFrom(this.mapService.mapService.map$);
    const layer = await firstValueFrom(this.layer$);
    const module: MapworksMarkupModule = <MapworksMarkupModule>map.getModule('markup');
    this.selectedFeature = null;
    this.moveFrom = null;
    this.moveTo = null;
    module.setLayer(layer);

    if (this.isModuleMarkupStarted) {
      // Stop this module's current (if active)
      module.stop();
      this.isModuleMarkupStarted = false;
    } else {
      this.isModuleMarkupStarted = true;
      module.move(layer);

      module.on('markup:move:start', (e: MapworksMarkupEvent) => {
        this.selectedFeature = e.feature.attributes.fields['Name'];
        this.moveFrom = `[${e.feature.getX()},${e.feature.getY()}]`;
        this.moveTo = null;
      });

      module.on('markup:move:end', (e: MapworksMarkupEvent) => {
        this.moveTo = `[${e.feature.getX()},${e.feature.getY()}]`;
      });
    }
  }

  private log(...args: any[]) {
    if (this.showLogging) {
      console.log('MapEventsDisplayComponent:', ...args);
    }
  }
}
