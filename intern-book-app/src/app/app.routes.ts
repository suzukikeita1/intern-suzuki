import { Routes,RouterModule } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NgModule } from '@angular/core';



export const routes: Routes = [
    { path: '', redirectTo: '/book-list', pathMatch: 'full' },
    { path: 'book-list', component: BookListComponent },
    { path: 'toolbar', component: ToolbarComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BookListComponent,
        ToolbarComponent
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }


