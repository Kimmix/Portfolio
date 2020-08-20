import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  startText = ''
  last = ''
  startTextArr = ['W', 'O', 'R', 'L', 'D']
  constructor() { }

  ngOnInit() {
    this.startTextArr.forEach((t, i) => {
      setTimeout(() => {
        console.log(t);
        this.startText += t
        if (i === 4) { this.last = ',' }
      }, (400 * i) - (100 * i));
    });
  }

}
