import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() { 

  }

  getBooks() {
    return [
      {
        name: 'Clean code',
        author: 'Robert Cecil Martin',
        amount: 500,
        image:
          'https://bizweb.dktcdn.net/100/180/408/products/clean-code.jpg?v=1649847195810'
      },
      {
        name: 'Đền Mạng',
        author: 'John Grisham',
        amount: 700,
        image:
          'https://bizweb.dktcdn.net/100/180/408/products/den-mang-tai-ban-2022.png?v=1669134438500'
      }
    ]
  }
}

