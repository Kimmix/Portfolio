import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-navbar [menu]="menu"></app-navbar>
    <app-header></app-header>
    <app-main [menu]="menu"></app-main>
  `,
  styles: [],
})
export class AppComponent {
  title = "portfolio";
  menu = ["Home", "about:me", "Experience", "Project"];
}
