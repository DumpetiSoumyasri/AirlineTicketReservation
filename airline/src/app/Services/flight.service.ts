import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../Models/Flight';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient){}
 

  getFlights(): Observable<Flight[]> {
   return this.http.get<Flight[]>('/api/flights')
  }
}
