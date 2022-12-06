import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book = {} as Book;
  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    // this.bookEmitter.emit(this.book);
    this.cartService.add(this.book);
    this.isInCart = !this.isInCart;
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
