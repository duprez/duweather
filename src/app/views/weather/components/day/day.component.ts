import { Component, Input } from '@angular/core';
import { Location } from '../../models/location';
import { Current } from '../../models/current';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {

  @Input() location: Location;
  @Input() current: Current;

  constructor() { }

}
