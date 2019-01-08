import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/core/material/material.module';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './containers/weather/weather.component';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
