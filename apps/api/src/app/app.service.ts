import { Order } from '@example/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  orders: Order[] = [];

  getOrders(): Order[] {
    return this.orders;
  }

  addOrder() {
    this.orders.push({
      id: this.orders.length,
      amount: Math.floor(Math.random() * 1000),
      status: 'Preparing',
    });
  }

  sendOrder(id: number) {
    const index = this.orders.findIndex((value) => value.id === id);
    if (index >= 0) {
      this.orders[index].status = 'Sending';
    }
  }
}
