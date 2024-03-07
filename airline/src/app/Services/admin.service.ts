import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flight } from '../Models/Flight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  constructor(private http: HttpClient) { }
   getAllFlights(): Observable<any> {
    return this.http.get(`http://localhost:4000/article-api/articles`)
  }
  addFlight(formData: any): Observable<any> {
  return this.http.post('http://localhost:4000/flight-api/flight', formData);
  }
  
}

 
 

 
 
 
 

