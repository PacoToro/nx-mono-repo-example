import { Component, Input } from '@angular/core';
import { Order } from '@example/data';

@Component({
  selector: 'example-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  @Input() orders: Order[];

  constructor() {
    this.orders = [];
  }
}
