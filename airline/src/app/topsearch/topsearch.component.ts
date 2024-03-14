import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { Flight } from '../Models/Flight';
import { flightService } from '../Services/flight.service';
import { NgToastService } from 'ng-angular-popup'

@Component({
  selector: 'app-topsearch',
  templateUrl: './topsearch.component.html',
  styleUrl: './topsearch.component.css'
})
export class TopsearchComponent {
  userService = inject(UserService)
  flightService=inject(flightService)
  router = inject(Router)
  toast=inject(NgToastService)
  flights: any[] = [
  ];
  filteredFlights: Flight[] = [];
  departloc: string;
  arrivloc: string;

  isUser:boolean=false;

  ngOnInit(): void {
    this.fetchFlights();

      if (this.departloc==='' && this.arrivloc==='') {
        this.filteredFlights = this.flights;
      }  

      this.userService.getLoginType().subscribe(
        (res)=>{
          console.log(this.isUser)
          this.isUser=res==='user';
        },
        (error)=>{
          console.log("error in getting role",error)
        }
      )
  }
fetchFlights(){

  this.userService.getAllFlights().subscribe((res => {
    this.flights = res.payload
    console.log(this.flights)
  }),
    (err) => { console.log(err) })

}
  
  filterFlightsByLoc() {
    if(!this.departloc&&!this.arrivloc){
      this.filteredFlights=[...this.flights]
    }
    else{
      console.log(this.departloc, this.arrivloc)
      this.filteredFlights = this.flights.filter(flight =>
        (flight.from.toLowerCase() == this.departloc) &&
        (flight.to.toLowerCase() == this.arrivloc)
      );
       console.log(this.filteredFlights)
    }
  }

  deleteFlight(id:string):void{
    let index = this.filteredFlights.findIndex((flight)=>{
        return flight.id === id;
    })
    this.filteredFlights.splice(index,1);
    this.flightService.deleteFlightByFlightId(id).subscribe(
      (data)=>{
        console.log('Flight deleted successfully',data)
        this.toast.success({
          detail: 'Flight deletion done',
          summary: 'Flight deleted successfully.',
          position: 'topRight',
          duration: 3000
        })
        this.fetchFlights();
      },
      (error)=>{
        console.log('error in deleting flight',error)
        this.toast.error({
          detail: 'No deletion done',
          summary: 'Flight not deleted.',
          position: 'topRight',
          duration: 3000
        })
      }
    )
  }

  Bookflight(id) {
    this.router.navigate([`/bookflight/${id}`])
  }
}
