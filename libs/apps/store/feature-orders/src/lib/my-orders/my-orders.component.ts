import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Order } from '@example/data';
import { OrdersService } from '@example/data-order';

@Component({
  selector: 'example-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent {
  orders: Order[] = [];

  constructor(private http: HttpClient, private orderService: OrdersService) {
    this.fetch();
  }

  fetch() {
    this.orderService.fetch().subscribe((res) => (this.orders = res));
  }

  addOrder() {
    this.orderService.addOrder().subscribe(() => {
      this.fetch();
    });
  }
}
