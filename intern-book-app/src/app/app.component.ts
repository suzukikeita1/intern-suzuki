import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { CardComponent } from "./card/card.component";
import { BOOKS } from './mock-books';
import { DialogComponent } from "./dialog/dialog.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ToolbarComponent,CardComponent,DialogComponent]
})
export class AppComponent {
  title = 'intern-book-app';
  books = BOOKS;
}
