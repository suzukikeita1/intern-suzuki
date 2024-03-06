import { Component,Input,Output, EventEmitter } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Book } from '../types/book';
import { BOOKS as mockBooks } from '../mock-books';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  @Input() books: Book[] = mockBooks;
  @Output() remove = new EventEmitter<number>();
  constructor(public dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data: { cardId: number }) {}

  removeCard(cardId: number) {
    this.books.splice(cardId,1);
  }
}
