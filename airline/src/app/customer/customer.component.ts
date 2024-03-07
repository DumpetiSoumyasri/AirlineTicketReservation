import { Component,inject } from '@angular/core';
import { FlightService } from '../Services/flight.service';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})


export class CustomerComponent {
  constructor(private flightService: FlightService) {}
  router = inject(Router)
  searchFlights(): void {
    this.router.navigate(['topsearch'])
    };
    bookFlights(): void {
    
    };
    // cancelFlights(): void {
    
    //  };
  }



