import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './Services/user.service';
import { inject } from '@angular/core';


export const protectGuard: CanActivateFn = (route, state) => {
  let userStatus: boolean;
  const userService = inject(UserService);
  const router = inject(Router)
  userService.getUserLoginStatus().subscribe({
    next: (getstatus) => {
      userStatus = getstatus
    }
  })
  if (userStatus) {
    return true
  } else {
    return router.navigate(['/login'])
  }

};
