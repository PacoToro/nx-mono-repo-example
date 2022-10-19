import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { UiModule } from '@example/ui';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, UiModule, HttpClientModule],
  declarations: [MyOrdersComponent],
  exports: [MyOrdersComponent],
})
export class FeatureOrdersModule {}
