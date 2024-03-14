import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { flightService } from '../Services/flight.service';
import { NgToastService } from 'ng-angular-popup'
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrl: './bookflight.component.css'
})
export class BookflightComponent {
  flightticketForm: FormGroup;
  constructor(private fb: FormBuilder, private flightService: flightService, private router: Router) { }
  activatedRoute = inject(ActivatedRoute);
  toast = inject(NgToastService);
  userService = inject(UserService)
  id;

  ngOnInit(): void {
    this.flightticketForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      mblno: ['', [Validators.required, Validators.pattern(/^[7-9]{1}[0-9]{9}$/)]],
      gender: ['', [Validators.required]],
    })

    this.id = this.activatedRoute.snapshot.paramMap.get('id')
  }


  get username() {
    return this.flightticketForm.get('username')
  }

  get email() {
    return this.flightticketForm.get('email')
  }

  get dob() {
    return this.flightticketForm.get('dob')
  }

  get mblno() {
    return this.flightticketForm.get('mblno')
  }

  get gender() {
    return this.flightticketForm.get('gender')
  }


  onSubmit() {
    if (this.flightticketForm.status === "VALID") {
      let newUser = this.flightticketForm.value;
      this.flightService.addUserdetails(newUser).subscribe({
        next: (res) => {
          console.log("userdetails", res)
          if (res.message === "userdetails added") {
            this.router.navigate([`/status/${this.id}`])
            this.toast.success({
              detail: 'Ticket booking done',
              summary: 'Ticket booking is done successfully.',
              position: 'topRight',
              duration: 3000
            })
            this.userService.updateFormData(this.flightticketForm.value)
          }
        },
        error: (err) => {
          console.log("error in user details", err)
          this.toast.error({
            detail: 'Error in entering details',
            summary: 'error in user details.Please check the details',
            position: 'topRight',
            duration: 3000
          })
        }
      })
    }
  }
}


