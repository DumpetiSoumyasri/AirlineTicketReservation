import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/user.service';
import { flightService } from '../Services/flight.service';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-checkstatus',
  templateUrl: './checkstatus.component.html',
  styleUrl: './checkstatus.component.css'
})
export class CheckstatusComponent implements OnInit {
  userService = inject(UserService)
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)
  flightService = inject(flightService)
  adminService = inject(AdminService)
  userDetails: any;
  id;
  username;
  flightDetails;
  formData: any;


  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id')

    this.userService.formData$.subscribe((FormData => {
      this.formData = FormData
    }))

    this.flightService.getFlightDetailsById(this.id).subscribe(
      (res) => {
        console.log("flight details ", res)
        this.flightDetails = res['payload']

      }, (error) => { console.log('error in getting flight details', error) }
    )
  }
}
