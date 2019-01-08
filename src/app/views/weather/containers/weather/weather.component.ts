import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../models/weather';
import { Location } from '../../models/location';
import { Current } from '../../models/current';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather: Weather;
  location: Location;
  current: Current;

  constructor(
    private weatherService: WeatherService
  ) {
    this.getCurrentWeather();
  }

  ngOnInit() {
  }

  getCurrentWeather(): void {
    this.weatherService.getCurrentWeather().subscribe(res => {
      this.weather = res;
      this.location = this.weather.location;
      this.current = this.weather.current;
      console.log(res);
    });
  }

}
