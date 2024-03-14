import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookTicket } from '../Models/bookticket';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class flightService {
  constructor(private http: HttpClient) { }

  getUserdetails(username): Observable<any> {
    return this.http.get(`http://localhost:4000/ticket-api/ticket/${username}`)
  }
  addUserdetails(newUser): Observable<any> {
    return this.http.post('http://localhost:4000/ticket-api/ticket', newUser);
  }


  getFlightDetailsById(id: string): Observable<any> {
    return this.http.get(`http://localhost:4000/flight-api/flight/${id}`);
  }

  deleteFlightByFlightId(id: string) {
    return this.http.delete<any>(`http://localhost:4000/flight-api/flight/${id}`)
  }

}
