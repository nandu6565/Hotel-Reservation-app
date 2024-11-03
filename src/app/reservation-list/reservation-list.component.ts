import { Component, OnInit } from '@angular/core';
import { ReservationModule } from '../reservation/reservation.module';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = []
  constructor( private reservationsService: ReservationService){

  }
  ngOnInit(): void {
    this.reservations = this.reservationsService.getReservations();
  }

  deleteReservation(id: string){
    this.reservationsService.deleteReservation(id); 
  }

}
