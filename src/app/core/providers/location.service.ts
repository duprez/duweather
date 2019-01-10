import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Position {
  city: string;
  country: string;
  hostname: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getCurrentPosition(): Observable<Position> {
    return this.http.get<Position>('http://ipinfo.io');
  }
}
