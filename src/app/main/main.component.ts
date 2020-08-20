import { Component, OnInit } from '@angular/core';

import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  faGithub = faGithub;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  scroll(el: HTMLElement) {
    console.log(el);
    
    el.scrollIntoView({ behavior: "smooth" });
  }

}
