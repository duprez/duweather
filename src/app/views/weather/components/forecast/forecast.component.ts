import { Component, Input } from '@angular/core';
import { Forecast } from '../../models/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {

  @Input() forecast: Forecast;

  constructor() { }

  getDayIcon(path: string): string {
    const newPath = path.substr(2);
    return 'https://' + newPath;
  }
}
