import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { NgToastService } from 'ng-angular-popup'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb: FormBuilder = inject(FormBuilder);
  userService = inject(UserService);
  router = inject(Router);
  toast = inject(NgToastService)

  userCredentialsError = {
    userCredErrStatus: false,
    userCredErrMsg: ""
  }
  userCredentials: FormGroup
  ngOnInit() {
    this.userCredentials = this.fb.group({
      loginType: '',
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      password: ['', Validators.required]
    })
  }

  onSubmitUser() {
    const formData = this.userCredentials.value;
    console.log(this.userCredentials.value);
    if (formData.loginType === 'user') {
      this.userService.userCustomerLogin(this.userCredentials.value).subscribe(
        (res) => {
          console.log("user login", res)
          if (res.message === 'login success') {
             //store token in local/session storage
            localStorage.setItem('token', res.token)
            //set user status and current user to service
            this.userService.setUserLoginStatus(true)
            this.userService.setCurrentUser(res.user)
            this.userService.setLoginType(formData.loginType)
            //navigate to user profile
            this.router.navigate([`/search/${res.user.username}`])
            this.toast.success({
              detail:'Login done',
              summary:'User login is done successfully.',
              position:'topRight',
              duration:3000
              })
          }
          else {
            this.userCredentialsError = {
              userCredErrStatus: true,
              userCredErrMsg: res.message
            }
          }
        }, (error) => {
          console.log('err in user login', error)
        }
      )
    }

    else {
      this.userService.userAdminLogin(this.userCredentials.value).subscribe(
        (res) => {
          console.log("admin login", res)
          if (res.message === 'login successs') {
            //   //store token in local/session storage
            localStorage.setItem('token', res.token)
            //   //set user status and current seller to service
            this.userService.setUserLoginStatus(true)
            this.userService.setCurrentUser(res.admin)
            this.userService.setLoginType(formData.loginType)
            //   //navigate to user profile
            this.router.navigate([`/search/${res.admin.username}`])
            this.toast.success({
              detail:'Login done',
              summary:'Admin login is done successfully.',
              position:'topRight',
              duration:3000
              })
          }
          else {
            this.userCredentialsError = {
              userCredErrStatus: true,
              userCredErrMsg: res.message
            }
          }
        }, (error) => {
          console.log('err in Admin login', error)
        }
      )
    }
  }
}
