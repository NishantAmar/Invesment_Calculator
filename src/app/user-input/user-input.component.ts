import { InvestmentService } from './../../investment.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  enterInitialInvestment = '0';
  enteredanualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  constructor(private investmentSerive : InvestmentService){

  }

  onSubmit(){
    this.investmentSerive.calculateInvestmentResults({
      initialInvestment: +this.enterInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredanualInvestment
    })
  //  this.calculate.emit({
  //   initialInvestment: +this.enterInitialInvestment,
  //   duration: +this.enteredDuration,
  //   expectedReturn: +this.enteredExpectedReturn,
  //   annualInvestment: +this.enteredanualInvestment
  // });
  }

}
