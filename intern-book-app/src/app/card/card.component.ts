import { Component,Input,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { Book } from '../types/book';
import { BOOKS as mockBooks } from '../mock-books';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() books: Book[] = mockBooks;

  @Output() remove = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {}

  openDialog(id: number, enterAnimationDuration: string, exitAnimationDuration: string,): void{
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { cardId: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
