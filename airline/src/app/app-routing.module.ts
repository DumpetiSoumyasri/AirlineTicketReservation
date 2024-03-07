import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent }from './register/register.component'
import { HomeComponent }from './home/home.component'
import { AdminComponent }from './admin/admin.component'
import { BookComponent } from './book/book.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { LoginComponent } from './login/login.component';
import { protectGuard } from './protect.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent 
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent 
  },
  {
    path:'search',
    component:TopsearchComponent,canActivate:[protectGuard]
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
   path:'bookflight',
   component:BookComponent,canActivate:[protectGuard]
  },
  {
    path:'admin',
    component:AdminComponent ,canActivate:[protectGuard]
  },{
    path:'**',
    component:PagenotfoundComponent
  }

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
