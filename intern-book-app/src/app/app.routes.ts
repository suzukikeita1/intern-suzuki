import { Routes,RouterModule } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: '', redirectTo: '/book-list', pathMatch: 'full' },
    { path: 'book-list', component: BookListComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BookListComponent,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }


