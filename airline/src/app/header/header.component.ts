import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  logout: boolean;
  userService = inject(UserService)
  ngOnInit(): void {
    this.userService.getUserLoginStatus().subscribe({
      next: (userLoginStatus) => {
        this.logout = userLoginStatus;
      },
      error: (err) => { console.log(err) }
    })
  }

}
