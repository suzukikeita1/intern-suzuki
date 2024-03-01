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
import { FormsModule } from '@angular/forms';
import { BOOKS } from '../../mock-books';



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
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})

export class BookListComponent {
  newBook = { name: '', detail: '', evaluation: 0 };

  addBook() {
    if (this.newBook.name && this.newBook.detail && this.newBook.evaluation) {
      BOOKS.push(this.newBook as Book);
      this.newBook = { name: '', detail: '', evaluation: 0 };
    }
  }

}
