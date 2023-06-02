import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { MapworksFeatureDisplayContext, MapworksFeatureEntity } from "../mapworks";

export const MAPWORKS_MOUSEOVER_DATA = new InjectionToken<MouseoverDataProvider>(
  'MAPWORKS_MOUSEOVER_DATA'
);

export interface MouseoverDataProvider {

  context$: Observable<MapworksFeatureDisplayContext | undefined>;

}
