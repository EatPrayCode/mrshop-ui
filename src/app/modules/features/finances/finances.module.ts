import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancesRoutingModule } from './finances-routing.module';
import { FinancesComponent } from './components/finances/finances.component';


@NgModule({
  declarations: [
    FinancesComponent
  ],
  imports: [
    CommonModule,
    FinancesRoutingModule
  ]
})
export class FinancesModule { }
