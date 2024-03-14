import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../Models/Flight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  constructor(private http: HttpClient) { }
  getAllFlights(): Observable<any> {
    return this.http.get(`http://localhost:4000/flight-api/flight`)
  }
  addFlight(adminCred): Observable<any> {
    return this.http.post('http://localhost:4000/flight-api/flight', adminCred);
  }
  getFlightById(id: string): Observable<any> {
    return this.http.get(`http://localhost:4000/flight-api/flight/${id}`)
  }
}










