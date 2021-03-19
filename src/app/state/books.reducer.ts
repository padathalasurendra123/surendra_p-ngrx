import { createReducer, on, Action } from '@ngrx/store';
import { Book } from '../books/books.model';
import { retrievedBookList } from './book.action';


export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { Book }) => [...Book])
);