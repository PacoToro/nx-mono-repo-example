import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '@example/data';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: Order[] = [];

  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get<Order[]>('/api/orders');
  }

  sendOrder(id: string) {
    return this.http.put(`/api/sendOrder/${id}`, {});
  }

  addOrder() {
    return this.http.post('/api/addOrder', {});
  }
}
