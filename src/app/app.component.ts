import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <app-header></app-header>
  <app-main></app-main>
  `,
  styles: []
})
export class AppComponent {
  title = 'portfolio';
}
