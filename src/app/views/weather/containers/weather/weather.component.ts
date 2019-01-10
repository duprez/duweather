import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../models/weather';
import { Location } from '../../models/location';
import { Current } from '../../models/current';
import { Forecast } from '../../models/forecast';
import { ActivatedRoute } from '@angular/router';
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
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {
    this.getCurrentWeather();
    this.getForecastWeather();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.getCurrentWeather(queryParams.place);
      this.getForecastWeather(queryParams.place);
    });
  }

  getCurrentWeather(place?: string): void {
    this.weatherService.getCurrentWeather(place).subscribe(res => {
      this.weather = res;
      this.location = this.weather.location;
      this.current = this.weather.current;
      console.log(res);
    });
  }

  getForecastWeather(place?: string): void {
    this.weatherService.getForecastWeather(place).subscribe(res => {
      res.forecast.forecastday.splice(0, 1); // Eliminamos el primer dia ya que lo estamos mostrando
      this.forecast = res;
      console.log('Forecast', res);
    });
  }
}
