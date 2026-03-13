import { Component } from '@angular/core';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.scss',
})
export class BookFlightComponent {
  flightType: string = 'one-way-flight';
  departureDate = '';
  arrivalDate = '';
  todayDate: Date = new Date();

  onBook() {
    if (new Date(this.departureDate) <= this.todayDate) {
      window.alert('Departure date cannot be earlier than today.');
    } else if (this.flightType === 'one-way-flight') {
      window.alert(`You have booked a one-way flight on ${this.departureDate}`);
    } else if (
      new Date(this.arrivalDate) < new Date(this.departureDate) &&
      new Date(this.arrivalDate) <= this.todayDate
    ) {
      window.alert('Invalid arrival date.');
    } else {
      window.alert(
        `You have booked a return flight, departing on ${this.departureDate} and returning on ${this.arrivalDate}`,
      );
    }
  }
}
