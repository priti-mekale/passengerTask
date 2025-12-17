import { Injectable } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnakbarserviceService {
  private readonly matconfig:MatSnackBarConfig={
    duration:3000,
    horizontalPosition:'left',
    verticalPosition:'top'
  }
  private _matsnack: any;

  Opensnackbar(msg:string){
    this._matsnack.open(msg, "close", this.matconfig)
  }
}
