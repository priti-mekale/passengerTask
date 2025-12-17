import { Component, OnInit } from '@angular/core';
import { Ipass } from 'src/app/model/passenger';
import { PassengerService } from 'src/app/sevices/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  passenger: Array<Ipass> = [];
  checkInCount!: number;

  constructor(private _passengerService: PassengerService) {}

  ngOnInit(): void {
    this.fetchAllpass();
  }

  fetchAllpass() {
    this._passengerService.fetchAll().subscribe({
      next: res => {
        this.passenger = res;
        this.getCheckInCount();   
      },
      error: err => console.log(err)
    });
  }

  getCheckInCount() {
    this.checkInCount = this.passenger.filter(p => p.checkedIn).length;
  }

  getRemove(flag: boolean) {
    this.getCheckInCount();
  }
}
