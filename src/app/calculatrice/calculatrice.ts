import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-calculatrice',
  imports: [DecimalPipe],
  templateUrl: './calculatrice.html',
  styleUrl: './calculatrice.css'
})
export class Calculatrice {
  num1 = 0;
  num2 = 0;
  result = 0;
  addNums (val1: string, val2: string): void {
    this.num1 = Number(val1);
    this.num2 = Number(val2);
    this.result = this.num1 + this.num2;
  }
  subNums (val1: string, val2: string): void {
    this.num1 = Number(val1);
    this.num2 = Number(val2);
    this.result = this.num1 - this.num2;
  }
  mulNums (val1: string, val2: string): void {
    this.num1 = Number(val1);
    this.num2 = Number(val2);
    this.result = this.num1 * this.num2;
  }
  divNums (val1: string, val2: string): void {
    this.num1 = Number(val1);
    this.num2 = Number(val2);
    this.result = this.num1 / this.num2;
  }
}
