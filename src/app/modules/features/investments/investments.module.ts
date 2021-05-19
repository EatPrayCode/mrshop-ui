import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentsComponent } from './components/investments/investments.component';


@NgModule({
  declarations: [
    InvestmentsComponent
  ],
  imports: [
    CommonModule,
    InvestmentsRoutingModule
  ]
})
export class InvestmentsModule { }
