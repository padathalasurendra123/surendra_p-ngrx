import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { BookCollectionComponent } from './books/book-collection/book-collection.component';
import { counterReducer } from './state/counter.reducer';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookComponent } from './books/book.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    // StoreModule.forRoot({ books: booksReducer, collection: collectionReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
