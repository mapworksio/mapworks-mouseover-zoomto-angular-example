import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in.component';

export const routes: Route[] = [{ path: '', component: SignInComponent }];

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInModule {}
