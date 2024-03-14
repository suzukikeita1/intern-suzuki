import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from './message/message.component'; 


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private dialog: MatDialog) { }

  openDialog(bookName: string) {
    this.dialog.open(MessageComponent, {
      data: {
        message: `${bookName}が追加されました`,
      },
      disableClose: false
    });
  }
}
