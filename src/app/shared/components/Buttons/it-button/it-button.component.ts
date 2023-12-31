import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'it-button',
  templateUrl: './it-button.component.html',
  styleUrls: ['./it-button.component.scss'],
})
export class ItButtonComponent  implements OnInit {

  @Input() color: "primary" | "secondary" | "tertiary" | "quaternary" | "red" | "blue" | "orange" | "green" = "primary";
  @Input() size: "big" | "small" = "big";
  @Input() type: "submit" = "submit";

  constructor() { }

  ngOnInit() {}

  getButtonId() {
    return `${this.color}-button`
  }

  getButtonClass() {
    return `${this.size}-button`;
  }
}
