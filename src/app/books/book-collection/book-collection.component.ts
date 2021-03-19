import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}