import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-test',
  templateUrl: './css-test.component.html',
  styleUrls: ['./css-test.component.scss']
})
export class CssTestComponent implements OnInit {
  public hover: boolean = false
  constructor() { }

  ngOnInit() {
  }

  mouseEnter() {
    this.hover = true
  }
  mouseLeave() {
    this.hover = false
  }

}
