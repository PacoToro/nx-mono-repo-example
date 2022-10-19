import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('orders')
  getOrders() {
    return this.appService.getOrders();
  }

  @Post('addOrder')
  addOrder() {
    return this.appService.addOrder();
  }

  @Put('sendOrder/:id')
  changeStatus(@Param('id') id: string) {
    console.log('Params id = ' + id);
    return this.appService.sendOrder(parseInt(id, 10));
  }
}
