import { LocationComponent } from '../pages/location/location.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bodyreq } from '../models/Bodyreq';
import { WeatherData } from '../models/Weatherdata';

@Injectable({
  providedIn: 'root'
})
export class PlayfabService {
  
  constructor(private http: HttpClient) { }
  context: string = " ";

  // getCallPlayFabHistory(): Observable<any>{
  //  return  this.http.get<any>(`http://localhost:8081/call/get/player`);

  // }
  getCallSaveLocation(reqbody: Bodyreq): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`http://localhost:8081/call/add/player`,reqbody);
  }

  geWeatherData(): Observable<WeatherData[]>{
    return this.http.get<WeatherData[]>(`http://localhost:8081/call/get/player`);

  }
}
