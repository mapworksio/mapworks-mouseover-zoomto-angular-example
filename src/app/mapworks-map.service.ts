import { Inject, Injectable, InjectionToken } from '@angular/core';
import {MapworksMapService as TheMapworksMapService, MapworksStudioConfigOptions } from './mapworks';

export const MAPWORKS_STUDIO_CONFIG_OPTIONS = new InjectionToken<MapworksStudioConfigOptions>(
  'MAPWORKS_STUDIO_CONFIG_OPTIONS'
);

@Injectable({
  providedIn: 'root'
})
export class MapworksMapService {

  public readonly mapService: TheMapworksMapService;

  constructor(
    @Inject(MAPWORKS_STUDIO_CONFIG_OPTIONS) public readonly studioConfig: MapworksStudioConfigOptions
  ) { 
    this.mapService = new TheMapworksMapService(studioConfig.mapworksLoginProvider);
  }

  public async isSignedIn(): Promise<boolean> {
    return !!(await this.mapService.getUser());
  }

}