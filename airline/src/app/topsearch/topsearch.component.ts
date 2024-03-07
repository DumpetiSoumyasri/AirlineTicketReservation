import { Component, OnInit, inject } from '@angular/core';
import{ UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { Flight } from '../Models/Flight';

@Component({
  selector: 'app-topsearch',
  templateUrl: './topsearch.component.html',
  styleUrl: './topsearch.component.css'
})
export class TopsearchComponent {
  userService=inject(UserService)
  // flights:any;
  router=inject(Router)
  flights:any[]= [
    // Populate with your flight data
  ];

  

  departloc:string;
  arrivloc:string
  ngOnInit(): void {
    this.userService.getAllFlights().subscribe((res=>{
      this.flights=res.payload
      console.log(this.flights)})
      ,(err)=>{console.log(err)})
       
  }

  filteredFlights: Flight[] = [];
  // selectedDate: string | any = '';

  
  
 
  filterFlightsByLoc() {

    if (!this.departloc || !this.arrivloc) {
      this.filteredFlights = this.flights;
      return;
    }

      console.log(this.departloc,this.arrivloc)
    // const selectedDateTime = new Date(this.selectedDate).getTime();
    // console.log(selectedDateTime)
this.filteredFlights = this.flights.filter(flight =>
    
      (flight.from == this.departloc) ||
      (flight.to >= this.arrivloc)
      
    );
    console.log(this.filteredFlights) 
  }
    

  
  Bookflight(){
    this.router.navigate(['/bookflight'])
  }
}
