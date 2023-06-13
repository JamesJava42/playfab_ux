import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayfabService {
  
  constructor(private http: HttpClient) { }
  context: string = " ";

  getCallPlayFabHistory(): Observable<any>{
   return  this.http.get<any>(`http://localhost:8081/call/get/player`);


  }
}
