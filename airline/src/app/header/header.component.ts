import { Component,inject,OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  logout:boolean;
  userService= inject(UserService)
  ngOnInit(): void {
    this.userService.getUserLoginStatus().subscribe({
      next:(loginStatus)=>{
        this.logout= loginStatus;
      },
      error:(err)=>{console.log(err)}
    })
  }
  userLogout(){
    this.userService.userLoginStatus.next(false);
  }
}
