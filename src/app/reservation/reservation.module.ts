import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from '../reservation-form/reservation.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    ReservationComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule, RouterModule, HomeModule
  ]
})
export class ReservationModule { }
