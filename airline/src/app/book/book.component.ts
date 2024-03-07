import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  bookFlights(): void {

  };
a:string=""

changeStatus(){
  // this.a="Your Ticket has been Booked Successfully"
  alert("Your Ticket has been Booked Successfully")
}


}
