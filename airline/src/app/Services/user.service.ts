import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from '../Models/user';
import { Admin } from '../Models/admin';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient=inject(HttpClient)

  loginType = new BehaviorSubject<string>("")
  setLoginType(type):any{
    this.loginType.next(type);
  }

  getLoginType(){
    return this.loginType.asObservable();
  }


  formDataSub=new BehaviorSubject<any>({})
  formData$=this.formDataSub.asObservable()

  updateFormData(formData:any){
    this.formDataSub.next(formData)
  }
 
  userLoginStatus = new BehaviorSubject<boolean>(false);

  currentUser = new BehaviorSubject<User>({
    username:'',
    password:'',
    email:'',
    dob:''
  });
 
  getUserLoginStatus():Observable<any>{
    return this.userLoginStatus.asObservable();
  }
 
  setUserLoginStatus(value:boolean){
    this.userLoginStatus.next(value);
  }
 
 
  getCurrentUser():Observable<User>{
    return this.currentUser.asObservable();
  }
 
  setCurrentUser(user:User){
    this.currentUser.next(user);
  }
 
  createUser(newUser:User):Observable<any>{
    return this.httpClient.post("http://localhost:4000/user-api/user",newUser)
  }

 createAdmin(newAdmin:Admin):Observable<any>{
  return this.httpClient.post('http://localhost:4000/admin-api/admin',newAdmin)
 }
 
 
 //user login

 userCustomerLogin(newUser:User):Observable<any>{
  return this.httpClient.post('http://localhost:4000/user-api/login',newUser)
 }
 
 userAdminLogin(usercredobj):Observable<any>{
  return this.httpClient.post('http://localhost:4000/admin-api/login',usercredobj)
 }
 
 getUserByUsername(username:string):Observable<any>{
  return this.httpClient.get(`http://localhost:3000/users?username=${username}`)
 }

getAllFlights():Observable<any>{
  return this.httpClient.get('http://localhost:4000/flight-api/flights')
}

 protectedRoute():Observable<any>{
  return this.httpClient.get('http://localhost:4000/user-api/user-sensitive-data')
 }

 //logout
 userLogout(){
  this.setUserLoginStatus(false)
  this.setCurrentUser({
      username:'',
      password:'',
      email:'',
      dob:''
  })
  localStorage.removeItem('token')
 }
 
}
