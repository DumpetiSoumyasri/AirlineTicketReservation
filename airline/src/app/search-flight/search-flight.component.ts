import { Component,inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightService } from '../Services/flight.service';
import { Flight } from '../Models/Flight';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrl: './search-flight.component.css'
})
export class SearchFlightComponent {
  flights:Flight[]=[];
  originalFlights:Flight[]=[];
  searchForm:FormGroup;
  constructor(private flightService: FlightService,private formBuilder:FormBuilder){}
  ngOnInit(): void{
    this.initForm();
    this.loadFlights();

  }
  router=inject(Router)
initForm():void{
  this.searchForm = this.formBuilder.group({
    departure: [''],
    arrival:[''],
  });
}
loadFlights():void{
  this.flightService.getFlights().subscribe((flights) =>{
    this.flights = flights;
    this.originalFlights = flights;
  });
}
searchFlights(): void{
  const{departure, arrival}=this.searchForm.value;
  this.flights=this.originalFlights.filter(
    (flight)=>
    flight.departureTime.toLowerCase().includes(departure.toLowerCase()) &&
    flight.arrivalTime.toLowerCase().includes(arrival.toLowerCase())
  );
}
topSearch(){
  this.router.navigate(['/bookflight'])
}
reset(){
  window.location.reload();
  // this.router.navigate(['/searchflight'])
}
}

