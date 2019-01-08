import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Weather } from './models/weather';
import { Observable } from 'rxjs';
import { Forecast } from './models/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  urlCurrent = 'https://api.apixu.com/v1/current.json';
  urlForecast = 'https://api.apixu.com/v1/forecast.json';
  key = 'dcc3b2da58da46fba13113752190801';
  constructor(
    private http: HttpClient
  ) {}

  getCurrentWeather(place: string = 'Almería'): Observable<Weather> {
    let params = new HttpParams();
    params = params.set('key', this.key);
    params = params.set('q', place);
    return this.http.get<Weather>(`${this.urlCurrent}`, { params: params });
  }

  getForecastWeather(place: string = 'Almería', days: number = 7): Observable<Forecast> {
    let params = new HttpParams();
    params = params.set('key', this.key);
    params = params.set('q', place);
    params = params.set('days', days.toString());
    return this.http.get<Forecast>(`${this.urlForecast}`, { params: params });

  }
}
