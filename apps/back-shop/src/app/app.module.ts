import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataOrderModule } from '@example/data-order';
import { UiModule } from '@example/ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, UiModule, DataOrderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
