import { inject, Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MapworksMapService } from './mapworks-map.service';

@Injectable()
export class CanActivateIfSignedInGuard implements CanActivate {
  constructor(private router: Router, private mapService: MapworksMapService) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const isSignedIn = await this.mapService.isSignedIn();
    if (isSignedIn) {
      return true;
    } else {
      this.router.navigate(['sign-in']);
      return false;
    }
  }
}

@Injectable()
export class CanActivateIfNotSignedInGuard implements CanActivate {
  constructor(private router: Router, private mapService: MapworksMapService) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const isSignedIn = await this.mapService.isSignedIn();
    if (isSignedIn) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}

// import { MapworksMapService } from './mapworks-map.service';

// export const canActivateIfSignedIn: CanActivateFn = async (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   const ret = await inject(MapworksMapService).isSignedIn();
//   console.log('AAA', ret);

//   return await inject(MapworksMapService).isSignedIn();
// };

// export const canActivateIfNotSignedIn: CanActivateFn = async (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   return !!(await inject(MapworksMapService).isSignedIn());
// };
