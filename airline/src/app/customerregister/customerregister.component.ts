import { Component,inject } from '@angular/core';
import {  FormBuilder,Validators,FormControl,FormGroup} from '@angular/forms'
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import {User} from '../Models/user';
@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrl: './customerregister.component.css'
})
export class CustomerregisterComponent {

  get username() {
    return this.user.get('username')
  }
 
  get password() {
    return this.user.get('password')
  }
 
  get email() {
    return this.user.get('email')
  }
 
  get dob() {
    return this.user.get('dob')
  }
 
 
 
fb:FormBuilder=inject(FormBuilder);
userService=inject(UserService)
router=inject(Router)
 
user=this.fb.group({
  username:['',[Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
  password:['',[Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
  email:['',[Validators.required]],
  dob:['',[Validators.required]],
});
 
// a:string=""

// changeStatus(){
//   this.a="registered successfully"
  
// }
onSubmitUser(){
  let {username,password,email,dob}=this.user.value;
  let newUser=new User(username,password,email,dob);
  this.userService.createCustomerUser(newUser).subscribe(
    (res)=>{
    
      if(this.user.status==='VALID'){
        console.log(res)
      // navigate to login
      this.router.navigate(['/customerlogin'])
     
alert('registered successfully')


      }
    },
    (err)=>{
      console.log("error in user creation",err)
    }
 
  )
}
}
