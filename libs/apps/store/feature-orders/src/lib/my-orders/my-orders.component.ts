import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Order } from '@example/data';

@Component({
  selector: 'example-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent {
  orders: Order[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http
      .get<Order[]>('/api/orders')
      .subscribe((res) => (this.orders = res));
  }

  addOrder() {
    this.http.post('/api/addOrder', {}).subscribe(() => {
      this.fetch();
    });
  }
}
