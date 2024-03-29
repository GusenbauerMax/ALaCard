import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('colorForm') public colorForm: NgForm = null as any;
  
  myInput: string = "";

  formGroup = new FormGroup({
    name: new FormControl({value: "", disabled: false}),
    number: new FormControl({value: "", disabled: false}, Validators.maxLength(10)),
    password: new FormControl({value: "", disabled: false}, [Validators.required, Validators.minLength(10)]),
    color: new FormControl({value: null, disabled: false}, Validators.required),
    description: new FormControl({value: "", disabled: false}, [Validators.required, Validators.maxLength(100)]),
    age_restriction: new FormControl({value: false, disabled: false}),
    register: new FormControl(false)
  });

  colors: string[] = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "pink",
    "rose"
  ];

  constructor() {
  }

  setColor(color: string) {
    if (!!color) {
      let colorShades = [
        "900", "800", "700", "600", "500", "400", "300", "200", "100", "000"
      ];
      const root = document.documentElement;
      colorShades.forEach(shade => {
        const rgb = this.hexToRgb(getComputedStyle(document.documentElement).getPropertyValue(`--${color}-${shade}`))!;
        root.style.setProperty(`--primary-${shade}`, `${rgb.r} ${rgb.g} ${rgb.b}`);
      });
    }
  }

  hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  test() {
    console.log (window.innerWidth);
  }
}
