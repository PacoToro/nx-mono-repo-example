import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { UiModule } from '@example/ui';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class FeatureWelcomeModule {}
