import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { WelcomeDateComponent } from './welcome-date/welcome-date.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OrdersComponent, WelcomeDateComponent],
  exports: [OrdersComponent, WelcomeDateComponent],
})
export class UiModule {}
