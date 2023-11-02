import { inject } from '@angular/core';
import { Route } from '@angular/router';
import {
  CanActivateIfNotSignedInGuard,
  CanActivateIfSignedInGuard,
} from './mapworks-auth-guard.guard';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: 'main',
    canActivate: [CanActivateIfSignedInGuard],
    loadChildren: () =>
      import('./main-app/main-app.module').then((m) => m.MainAppModule),
  },
  {
    path: 'sign-in',
    canActivate: [CanActivateIfNotSignedInGuard],
    loadChildren: () =>
      import('./sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  { path: '**', redirectTo: 'main' },
];
