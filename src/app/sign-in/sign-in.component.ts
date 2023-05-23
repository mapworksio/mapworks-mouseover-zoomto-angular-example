import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { MapworksMapService } from '../mapworks-map.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private router: Router,
    public readonly mapService: MapworksMapService,
  ) { 
    this.mapService.mapService.user$.pipe(
      takeUntilDestroyed(),
      tap((user) => {
        if(user) {
          this.router.navigate(['']);
        }
      }),
    ).subscribe();
  }

  ngOnInit() {
  }

  doSignIn() {
    console.log('doSignIn()');
    this.mapService.mapService.signinPopup();
  }

}