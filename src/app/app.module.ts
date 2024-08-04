import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import { FormsModule } from "@angular/forms";
import { CurrencyPipe } from "@angular/common";

@NgModule({
  declarations:[AppComponent,HeaderComponent,UserInputComponent,InvestmentResultComponent],
  imports: [FormsModule, CurrencyPipe]
})
export class AppModule{}
