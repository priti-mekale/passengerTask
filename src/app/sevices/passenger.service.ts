import { Injectable } from '@angular/core';
import { Ipass } from '../model/passenger';
import { Observable, of } from 'rxjs';
import { passengerArr } from '../const/passe';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  passengerObj: Array<Ipass> =passengerArr; 

  constructor() { }

  fetchAll(): Observable<Ipass[]> {
    return of(this.passengerObj);
  }

  updatePass(passenger: Ipass) {
    let updateObj = this.passengerObj.findIndex(
      f => f.id === passenger.id
    );

    if (updateObj !== -1) {        
      this.passengerObj[updateObj] = passenger;
    }
  }

  removePass(passenger: Ipass) {
    let getIndex = this.passengerObj.findIndex(
      f => f.id === passenger.id
    );

    if (getIndex !== -1) {          
      this.passengerObj.splice(getIndex, 1);
    }
  }
}
