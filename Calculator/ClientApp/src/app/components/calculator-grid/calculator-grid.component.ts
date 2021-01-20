import { Component, OnInit } from '@angular/core';
import { ICalculator } from 'src/app/models/calculator';
import { CalcApiService } from 'src/app/services/calc-api.service';
import { CALCULATOR } from './calculator.config';

@Component({
  selector: 'calculator-grid',
  templateUrl: './calculator-grid.component.html',
  styleUrls: ['./calculator-grid.component.css']
})
export class CalculatorGridComponent implements OnInit {
  public calculator: ICalculator;
  constructor(private calcApiService: CalcApiService) {
    this.calculator = CALCULATOR;
  }

  ngOnInit() {
  }

  write(char: string) {
    if (this.calculator.operators.includes(char))
      this.calculator.display.next(`${this.calculator.display.getValue()}${char}`);
    else
      this.calculator.display.next(`${this.calculator.display.getValue()}${char}`);

  }
  equal() {
    this.calcApiService.calculate(this.getEncodedExpression())
      .subscribe((res) => {
        this.calculator.history.push(`${this.calculator.display.getValue()}=${res}`);
        this.clear('c');
        this.write(res);
      });
  }
  clear(clearAction: string) {
    if (clearAction.toLocaleUpperCase() === 'C')
      this.calculator.display.next('');
    else if (clearAction.toLocaleUpperCase() === 'AC') {
      this.calculator.display.next('');
      this.calculator.history = [];
    }
  }
  getEncodedExpression() {
    let encodedExpression = this.calculator.display.getValue()
    for (const operator of this.calculator.operators) {
      encodedExpression = encodedExpression.split(operator).join(this.calculator.encodedOperators[operator]);
    }
    return encodedExpression;
  }

}
