import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Order } from '@example/data';
import { OrdersService } from '@example/data-order';

@Component({
  selector: 'example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  orders: Order[] = [];

  constructor(private http: HttpClient, private orderService: OrdersService) {
    this.fetch();
  }

  fetch() {
    this.orderService.fetch().subscribe((res) => (this.orders = res));
  }

  sendOrder(id: string) {
    this.orderService.sendOrder(id).subscribe(() => {
      this.fetch();
    });
  }
}
