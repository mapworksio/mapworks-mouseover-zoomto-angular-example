import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAppComponent } from './main-app.component';
import { Route, RouterModule } from '@angular/router';
import {
  MapEventsDisplayComponent,
  MapEventsDisplayFeatureComponent,
} from './map-events-display.component';

export const routes: Route[] = [{ path: '', component: MainAppComponent }];

@NgModule({
  declarations: [
    MainAppComponent,
    MapEventsDisplayComponent,
    MapEventsDisplayFeatureComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainAppModule {}
