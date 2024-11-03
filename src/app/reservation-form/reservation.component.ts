import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  

  reservationForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['',Validators.required],
      checkOutDate: ['',Validators.required],
      guestName: ['',Validators.required],
      guestEmail: ['',[Validators.required,Validators.email]],
      guestPhoneNumber: ['',Validators.required],
      roomNumber: ['',Validators.required],
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      let reservation = this.reservationService.getReservation(id)
      if(reservation){
        this.reservationForm.patchValue(reservation)
      }
    }

  }

  onSubmit(){
    if(this.reservationForm.valid){
      let reservation: Reservation = this.reservationForm.value;
      

      let id = this.activatedRoute.snapshot.paramMap.get('id')
      if(id){
        this.reservationService.updateReservation(id,reservation)
      }else{
        this.reservationService.addReservation(reservation);
      }

      this.router.navigate(['/list'])
    }
  }

}
