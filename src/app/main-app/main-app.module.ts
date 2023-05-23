import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAppComponent } from './main-app.component';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [{ path: '', component: MainAppComponent }];

@NgModule({
  declarations: [MainAppComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAppModule {}
