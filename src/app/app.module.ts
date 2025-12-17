import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{HttpClientModule} from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PassengerModule } from './passenger/passenger/passenger.module';
import { PassengerCountComponent } from './passenger/passenger-count/passenger-count.component';






@NgModule({
  declarations: [
    AppComponent,
    
    
   
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    PassengerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }