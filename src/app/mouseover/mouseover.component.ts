import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MAPWORKS_MOUSEOVER_DATA,
  MouseoverDataProvider,
} from './mouseover.types';

@Component({
  selector: 'app-mouseover',
  templateUrl: './mouseover.component.html',
  styleUrls: ['./mouseover.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class MouseoverComponent implements OnInit {

  @Input() mode: 'logo' | 'loading' | 'display' = 'display';

  @ViewChild('mouseover', { static: true }) mouseoverElement!: ElementRef;

  constructor(
    @Inject(MAPWORKS_MOUSEOVER_DATA) public readonly provider: MouseoverDataProvider,
  ) {
  }

  ngOnInit() {
  }

}
