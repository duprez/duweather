import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather: Weather;

  constructor(
    private weatherService: WeatherService
  ) {
    this.getCurrentWeather();
  }

  ngOnInit() {
  }

  getCurrentWeather() {
    this.weatherService.getCurrentWeather().subscribe(res => {
      this.weather = res;
      console.log(res);
    });
  }

}
