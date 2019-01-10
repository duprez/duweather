import { Component, Input } from '@angular/core';
import { Forecast } from '../../models/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {

  @Input() forecast: Forecast;

  days: string[] = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ];

  constructor() { }

  getDayIcon(path: string): string {
    const newPath = path.substr(2);
    return 'https://' + newPath;
  }

  getDateName(date: string): string {
    const _date = new Date(date);
    return this.days[_date.getDay()];
  }
}
