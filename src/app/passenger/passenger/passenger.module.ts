import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import { PassengerCountComponent } from '../passenger-count/passenger-count.component';
import { PassengercardComponent } from '../passengercard/passengercard.component';
import { PassengerDashboardComponent } from '../passenger-dashboard/passenger-dashboard.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengercardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,MatButtonModule,
  
],
  exports: [
    PassengerDashboardComponent  
  ]
})
export class PassengerModule {}

