import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { provideHttpClient,withFetch,withInterceptors } from '@angular/common/http';
import { BookflightComponent } from './bookflight/bookflight.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { authInterceptor } from './auth.interceptor';
import { CheckstatusComponent } from './checkstatus/checkstatus.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BookflightComponent,
    TopsearchComponent,
    LoginComponent,
    PagenotfoundComponent,
    BookflightComponent,
    CheckstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule
  ],
  providers: [provideHttpClient(withFetch()),
  provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }





