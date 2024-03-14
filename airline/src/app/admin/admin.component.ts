import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup'
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent implements OnInit {

  flightForm: FormGroup;
  toast = inject(NgToastService)
  categories = ['AirIndia', 'Indigo', 'Vistara'];
  types = ['Child', 'Adult', 'SeniorCitizens'];
  username:string;
  constructor(private fb: FormBuilder, private userService:UserService, private AdminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.flightForm = this.fb.group({
      id: ['', [Validators.required]],
      category: ['', [Validators.required]],
      type: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      departureTime: ['', [Validators.required]],
      arrivalTime: ['', [Validators.required]],
      departureDate: ['', [Validators.required]],
      arrivalDate: ['', [Validators.required]],
      cost: ['', [Validators.required]]
    })
    this.userService.getCurrentUser().subscribe({
      next:(res)=>{
        this.username = res.username;
      }
    })
  }

  get id() {
    return this.flightForm.get('id')
  }

  get category() {
    return this.flightForm.get('category')
  }

  get type() {
    return this.flightForm.get('type')
  }

  get from() {
    return this.flightForm.get('from')
  }

  get to() {
    return this.flightForm.get('to')
  }

  get departureTime() {
    return this.flightForm.get('departureTime')
  }

  get arrivalTime() {
    return this.flightForm.get('arrivalTime')
  }

  get departureDate() {
    return this.flightForm.get('ddepartureDate')
  }

  get arrivalDate() {
    return this.flightForm.get('arrivalDate')
  }

  get cost() {
    return this.flightForm.get('cost')
  }

  navigateBack(){
    this.router.navigate([`search/${this.username}`]);
  }

  existed: boolean = false;
  msg: string = '';

  onSubmit() {
    console.log(this.flightForm)
    if (this.flightForm.valid) {

      this.AdminService.addFlight(this.flightForm.value).subscribe(
        (res) => {
          console.log(res)
          if (res.message === "flight added") {
            this.toast.success({
              detail: 'Flight added done',
              summary: 'Flight added successfully.',
              position: 'topRight',
              duration: 3000
            })
            this.existed = false;
            this.msg = '';
          }
          else if (res.message === "Flight already existed with given ID") {
            this.existed = true;
            this.msg = "Flight already existed with given ID";
          }

        },
        (error) => {
          console.log('error', error)
          this.toast.error({
            detail: 'Fields missing',
            summary: 'Please fill all the fields.',
            position: 'topRight',
            duration: 3000
          })
        }
      );
    }
    else {
      this.toast.error({
        detail: 'Form is invalid',
        summary: 'Form is invalid.Please check the fields.',
        position: 'topRight',
        duration: 3000
      })
    }
  }
}
