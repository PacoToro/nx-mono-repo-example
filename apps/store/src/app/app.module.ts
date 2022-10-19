import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FeatureOrdersModule } from '@example/apps/store/feature-orders';
import { FeatureWelcomeModule } from '@example/apps/store/feature-welcome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FeatureOrdersModule,
    FeatureWelcomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
