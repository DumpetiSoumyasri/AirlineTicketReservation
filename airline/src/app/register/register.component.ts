import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { User } from '../Models/user';
import { Admin } from '../Models/admin';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  toast = inject(NgToastService)

  //getter and setter methods
  get username() {
    return this.registerForm.get('username')
  }
  get password() {
    return this.registerForm.get('password')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get dob() {
    return this.registerForm.get('dob')
  }


  duplicateUserStatus: boolean = false;
  duplicateAdminStatus: boolean = false;
  router = inject(Router)
  userService = inject(UserService);
  registerForm: FormGroup;
  fb: FormBuilder = inject(FormBuilder);

  ngOnInit() {
    this.registerForm = this.fb.group({
      registerType: 'user',
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      if (formData.registerType === 'user') {
        let { username, password, email, dob } = this.registerForm.value;
        let newUser = new User(username, password, email, dob);
        this.userService.createUser(newUser).subscribe({
          next: (res) => {
            console.log("user", res)
            //navigate to login
            if (res.message === "User created") {
              console.log(res)
              this.router.navigate(['/login'])
              this.toast.success({
                detail: 'Registration done',
                summary: 'User registration is done successfully.',
                position: 'topRight',
                duration: 3000
              })
            }
            else {
              this.duplicateUserStatus = true;
            }

          }, error: (error) => {
            console.log('error in user creation', error)
          }
        }
        )

      }
      else if (formData.registerType === 'admin') {
        let { username, password, email, dob } = this.registerForm.value;
        let newAdmin = new Admin(username, password, email, dob);
        this.userService.createAdmin(newAdmin).subscribe({
          next: (res) => {
            console.log("admin", res)
            //navigate to login
            if (res.message === "admin created") {
              console.log(res)
              this.router.navigate(['/login'])
              this.toast.success({
                detail: 'Registration done',
                summary: 'Admin registration is done successfully.',
                position: 'topRight',
                duration: 3000
              })
            }
            else {
              this.duplicateAdminStatus = true;
            }
          }, error: (error) => {
            console.log('error in admin creation', error)
          }
        }
        )
      }
      else {
        console.log('form is invalid')
      }
    }
  }
}