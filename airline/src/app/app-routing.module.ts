import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AdminComponent } from './admin/admin.component'
import { TopsearchComponent } from './topsearch/topsearch.component';
import { LoginComponent } from './login/login.component';
import { protectGuard } from './protect.guard';
import { BookflightComponent } from './bookflight/bookflight.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CheckstatusComponent } from './checkstatus/checkstatus.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search/:username',
    component: TopsearchComponent, canActivate: [protectGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bookflight/:id',
    component: BookflightComponent, canActivate: [protectGuard]
  },
  {
    path: 'admin/:username',
    component: AdminComponent, canActivate: [protectGuard]
  },
  {

    path: 'status/:id',
    component: CheckstatusComponent, canActivate: [protectGuard]
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
