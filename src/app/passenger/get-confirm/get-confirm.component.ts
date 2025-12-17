import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {

   msg!:string
 
  constructor(
    private _matConfigRef:MatDialogRef<GetConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) getmsg:string
  ) {
    this.msg=getmsg
   }

  ngOnInit(): void {
  }

  onclose(flag:boolean){
    this._matConfigRef.close(flag)
  }
}
