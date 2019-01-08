import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../models/weather';
import { Location } from '../../models/location';
import { Current } from '../../models/current';
import { Forecast } from '../../models/forecast';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather: Weather;
  location: Location;
  current: Current;

  forecast: Forecast;

  constructor(
    private weatherService: WeatherService
  ) {
    this.getCurrentWeather();
    this.getForecastWeather();
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

  getForecastWeather(): void {
    this.weatherService.getForecastWeather().subscribe(res => {
      this.forecast = res;
      console.log('Forecast', res);
    });
  }

  getDayIcon(path: string): string {
    const newPath = path.substr(2);
    return 'http://' + newPath;
  }

}
