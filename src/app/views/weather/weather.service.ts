import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Weather } from './models/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.apixu.com/v1/current.json';
  key = 'dcc3b2da58da46fba13113752190801';

  constructor(
    private http: HttpClient
  ) {}

  getCurrentWeather(place: string = 'Almería'): Observable<Weather> {
    let params = new HttpParams();
    params = params.set('key', this.key);
    params = params.set('q', place);
    return this.http.get<Weather>(`${this.url}`, { params: params });
  }
}
