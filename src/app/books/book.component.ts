import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addBook, removeBook, retrievedBookList } from '../state/book.action';
import { selectBookCollection, selectBooks } from '../state/books.selectors';
import { GoogleBooksService } from './books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));
 
  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }
 
  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }
 
  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}
 
  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }

}
