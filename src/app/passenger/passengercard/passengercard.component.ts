import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ipass } from 'src/app/model/passenger';
import { PassengerService } from 'src/app/sevices/passenger.service';
import { SnakbarserviceService } from 'src/app/sevices/snakbarservice.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-passengercard',
  templateUrl: './passengercard.component.html',
  styleUrls: ['./passengercard.component.scss']
})
export class PassengercardComponent implements OnInit {

  @Input() pass!:Ipass
    @Output() emitremoveFlag:EventEmitter<boolean>=new EventEmitter<boolean>()
    // @ViewChild('fn') fn!:HTMLInputElement
    isInEditMode:boolean=false
  constructor(
    private _passengerService:PassengerService ,
    private _matDiaolog:MatDialog,
    private _snackbar:SnakbarserviceService
  ) { }

  ngOnInit(): void {

  }

  onUpdate(fn :HTMLInputElement, passObj:Ipass){
     const updatedPassenger: Ipass = {
    ...passObj,              
    fullName: fn.value       
  }

  this._passengerService.updatePass(updatedPassenger)
  this._snackbar.Opensnackbar(`This passenger ${passObj.fullName} updated Succesfully.`)
  }

  onRemove(p:Ipass){
    let mat_config=new MatDialogConfig()
    mat_config.data=`Are you sure you want to remove ${p.fullName} this Passenger`
    mat_config.disableClose=true
    let matDiolog=this._matDiaolog.open(GetConfirmComponent, mat_config);
    matDiolog.afterClosed()
      .subscribe(res=>{
         if(res){
           this._passengerService.removePass(p)
            this.emitremoveFlag.emit(true)
           this._snackbar.Opensnackbar(`This passenger ${p.fullName} removed succesfully.`)
         }
      })
   
   

  }

}
