import { InvestmentService } from './../../investment.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  constructor(private investmentService : InvestmentService){}
// @Input() results?: {
//   year: number,
//   interest: number,
//   valueEndOfYear: number,
//   annualInvestment: number,
//   totalInterest: number,
//   totalAmountInvested: number
// }[];
get results(){
  return this.investmentService.resultData;
}

}
