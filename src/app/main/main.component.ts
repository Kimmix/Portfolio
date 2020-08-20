import { Component, OnInit, Input } from '@angular/core';

import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  @Input() menu: string[];
  faGithub = faGithub;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  age = null;

  constructor() {}

  ngOnInit(): void {
    this.age = new Date().getFullYear() - 1996;
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth" });
  }
}
