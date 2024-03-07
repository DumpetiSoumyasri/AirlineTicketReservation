import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  // getters and setters
  get username() {
    return this.userCredentials.get('username')
  }
  get password() {
    return this.userCredentials.get('password')
  }
 
  onFormSubmit() {
 
    console.log(this.userCredentials.value)
 
  }
  fb:FormBuilder=inject(FormBuilder);
  userService=inject(UserService);
  router = inject(Router)
  userCredentials=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  });
  onSubmitUser(){
    this.userService.userAdminLogin(this.userCredentials.value).subscribe(
      (res)=>{
        console.log(res)
        if(res.length===0){
        alert("Invalid Username")
      }else{
        if(this.userCredentials.value.password===res[0].password){
            this.router.navigate([`/admin`])
            this.userService.setUserLoginStatus(true);
        }else{
          alert("Invalid password")
        }
      }
    },
      (err)=>{console.log(err)}
    )
 
  }
 


}



 
 
  
  
 
 

