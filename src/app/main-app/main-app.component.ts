import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { MapworksUser } from '../mapworks';
import { MapworksMapService } from '../mapworks-map.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css'],
})
export class MainAppComponent implements OnInit, AfterViewInit {
  @ViewChild('map', { static: true }) map!: ElementRef;

  user$: Observable<MapworksUser | null>;
  accessToken$: Observable<string | undefined>;

  constructor(private mapService: MapworksMapService) {
    this.user$ = mapService.mapService.user$;
    this.accessToken$ = mapService.mapService.accessToken$;
  }

  ngOnInit() {
    console.log('ngOnInit', this.map, this.map.nativeElement);
    this.mapService.mapService.initMap(
      this.map.nativeElement,
      this.mapService.studioConfig
    );
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.map);
  }

  doSignOut() {
    console.log('doSignOut');
    this.mapService.mapService.signoutRedirect();
  }
}
