import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Order } from '@example/data';

@Component({
  selector: 'example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  orders: Order[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http
      .get<Order[]>('/api/orders')
      .subscribe((res) => (this.orders = res));
  }

  sendOrder(id: string) {
    this.http.put(`/api/sendOrder/${id}`, {}).subscribe(() => {
      this.fetch();
    });
  }
}
