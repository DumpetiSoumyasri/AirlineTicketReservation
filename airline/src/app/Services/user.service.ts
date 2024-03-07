import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from '../Models/user';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient=inject(HttpClient)
 
 
  // userLoginStatus = signal(false)
 
  // getUserLoginStatus(){
  //   return this.userLoginStatus()
  // }
 
  // setUserLoginStatus(value:boolean){
  //   this.userLoginStatus.set(value)
  // }
 
  userLoginStatus = new BehaviorSubject<boolean>(false);
 
  getUserLoginStatus():Observable<any>{
    return this.userLoginStatus.asObservable();
  }
 
  setUserLoginStatus(value:boolean){
    this.userLoginStatus.next(value);
  }
 
  currentUser = new BehaviorSubject<User>({
    username:'',
    password:'',
    email:'',
    dob:''
  });
 
  getCurrentUser():Observable<User>{
    return this.currentUser.asObservable();
  }
 
  setCurrentUser(user:User){
    this.currentUser.next(user);
  }
 
  adminLoginStatus = new BehaviorSubject<boolean>(false);
 
  getAdminLoginStatus():Observable<any>{
    return this.adminLoginStatus.asObservable();
  }
 
  setAdminLoginStatus(value:boolean){
    this.adminLoginStatus.next(value);
  }
 
  currentAdmin = new BehaviorSubject<User>({
    username:'',
    password:'',
    email:'',
    dob:''
  });
 
  getCurrentAdmin():Observable<User>{
    return this.currentAdmin.asObservable();
  }
 
  setCurrentAdmin(user:User){
    this.currentAdmin.next(user);
  }
  createCustomerUser(newUser:User):Observable<any>{
    return this.httpClient.post("http://localhost:4000/user-api/user",newUser)
  }

 createAdminUser(newUser:User):Observable<any>{
  return this.httpClient.post('http://localhost:4000/user-api/user',newUser)
 }
 
 
 //user login

 userCustomerLogin(newUser:User):Observable<any>{
  return this.httpClient.post('http://localhost:4000/user-api/login',newUser)
 }
 
 userAdminLogin(usercredobj):Observable<any>{
  return this.httpClient.post('http://localhost:4000/user-api/login',usercredobj)
 }
 
 getUserByUsername(username:string):Observable<any>{
  return this.httpClient.get(`http://localhost:3000/users?username=${username}`)
 }

//  getDeparture():Observable<any>{
//   return this.httpClient.get(`http://localhost:4000/Departure`)
//  }
 
//   getArrival():Observable<any>{
//     return this.httpClient.get(`http://localhost:4000/Arrival`)
 
//  }

getAllFlights():Observable<any>{
  return this.httpClient.get('http://localhost:4000/flight-api/flights')
}

 protectedRoute():Observable<any>{
  return this.httpClient.get('http://localhost:4000/user-api/user-sensitive-data')
 }
 
}
