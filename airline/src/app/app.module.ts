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
import { FlightService } from './Services/flight.service';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { BookComponent } from './book/book.component';
import { EditComponent } from './edit/edit.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchFlightComponent,
    BookComponent,
    EditComponent,
    TopsearchComponent,
    LoginComponent,
    PagenotfoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [provideHttpClient(withFetch()),FlightService],
      bootstrap: [AppComponent]
})
export class AppModule { }





