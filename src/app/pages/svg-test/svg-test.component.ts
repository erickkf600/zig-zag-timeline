import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-test',
  templateUrl: './svg-test.component.html',
  styleUrls: ['./svg-test.component.scss']
})
export class SvgTestComponent implements OnInit {

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
