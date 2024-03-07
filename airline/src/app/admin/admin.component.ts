import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';
// import { Post } from '../model/post';
@Component({
     selector: 'app-admin',
     templateUrl: './admin.component.html',
     styleUrl: './admin.component.css'
   })

export class AdminComponent implements OnInit {
 
  flightForm: FormGroup;
  types = ['Child', 'Adult', 'Elders'];
  constructor(private fb: FormBuilder, private AdminService: AdminService, private router: Router) { }
 
  ngOnInit(): void {
    this.flightForm = this.fb.group({
      id:['', [Validators.required]],
      type:['', [Validators.required]],
      from:['', [Validators.required]],
      to:['', [Validators.required]],
      imageUrl: [''],
      departureTime:['', [Validators.required]],
      arrivalTime:['', [Validators.required]],
      departureDate:['', [Validators.required]],
      arrivalDate:['', [Validators.required]],
    })
  }
  get id(){
    return this.flightForm.get('id')
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
 
  get imageUrl() {
    return this.flightForm.get('imageUrl')
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
 
  file: File;
  fileName: string = "No file selected";
 
  onChange(file: File) {
    if (file) {
      this.fileName = file.name;
      this.file = file;
    }
  }
 
  onSubmit() {
    //formdata obj preparation
    let formData = new FormData();
    //get article object from NgForm object
    let articleObj = this.flightForm.value;
    //append image to it
    formData.append("imageUrl", this.file);
    //append article object by converting it into string
    formData.append("articleObj", JSON.stringify(articleObj))
 
    console.log(formData)
 
    if (this.flightForm.valid) {
      this.AdminService.addFlight(formData).subscribe(
        (res) => {
          if (res.message === "Flight added") {
            alert('flight saved successfully');
            this.router.navigate(['/user-profile/:username'])
          }
        },
        (error) => {
          console.log('error', error)
          alert('Fill all the fields')
        }
      );
    }
    else {
      alert('Form is invalid.Please check the fields')
    }
  }
 
 
}

// import { Component } from '@angular/core';
// import { FlightService } from '../flight.service';
// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrl: './admin.component.css'
// })
// export class AdminComponent {
//   constructor(private flightService: FlightService) {}

//   // editFlight(): void {

//   // }

//   // getFlights(): void {
  
//   // }
// }
