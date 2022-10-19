import { Component } from '@angular/core';

@Component({
  selector: 'example-welcome-date',
  templateUrl: './welcome-date.component.html',
  styleUrls: ['./welcome-date.component.css'],
})
export class WelcomeDateComponent {
  today: Date;

  constructor() {
    this.today = new Date();
  }
}
