import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/core/material/material.module';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './containers/weather/weather.component';
import { DayComponent } from './components/day/day.component';
import { ForecastComponent } from './components/forecast/forecast.component';

@NgModule({
  declarations: [WeatherComponent, DayComponent, ForecastComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
