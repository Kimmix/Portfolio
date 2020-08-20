import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  @Input() menu: string[];

  constructor() {}

  ngOnInit(): void {}

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth" });
  }
}
