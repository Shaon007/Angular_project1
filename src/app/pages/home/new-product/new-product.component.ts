import { Component } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  cards = [
  {
    img: '/assets/1.png',
    title: 'Football Shoes',
    price: 120,
    icon: '⚽'
  },
  {
    img: '/assets/2.png',
    title: 'Cricket Bat',
    price: 80,
    icon: '🏏'
  },
  {
    img: '/assets/3.png',
    title: 'Tennis Racket',
    price: 95,
    icon: '🎾'
  },
  {
    img: '/assets/4.png',
    title: 'Basketball',
    price: 60,
    icon: '🏀'
  },
  {
    img: '/assets/5.png',
    title: 'Hockey Stick',
    price: 70,
    icon: '🏒'
  },
  {
    img: '/assets/6.png',
    title: 'Baseball Glove',
    price: 55,
    icon: '⚾'
  }
];

}
