import { Component } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  isShowing: boolean = true;
  myName: string = '';

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
}
