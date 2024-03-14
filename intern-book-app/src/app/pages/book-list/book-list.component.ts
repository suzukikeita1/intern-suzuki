import { Component } from '@angular/core';
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
import { Book } from '../../types/book';
import { FormsModule, NgModel } from '@angular/forms';
import { BOOKS } from '../../mock-books';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-book-list',
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
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})

export class BookListComponent {
  newBook = { name: '', detail: '', evaluation: 0 };
  books = BOOKS;
  
  @ViewChild('nameInput') nameInput!: NgModel;
  @ViewChild('detailInput') detailInput!: NgModel;
  @ViewChild('evaluationInput') evaluationInput!: NgModel;

  constructor(private messageService: MessageService) { }

  addBook() {
    if (this.nameInput.valid && this.detailInput.valid && this.evaluationInput.valid) {
      BOOKS.push(this.newBook as Book);
      this.messageService.openDialog(this.newBook.name);
      this.newBook = { name: '', detail: '', evaluation: 0 };
      this.nameInput.reset();
      this.detailInput.reset();
      this.evaluationInput.reset();
    }
  }

}


