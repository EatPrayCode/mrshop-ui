import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MembershipComponent } from './components/membership/membership.component';


@NgModule({
  declarations: [
    MembershipComponent
  ],
  imports: [
    CommonModule,
    MembershipRoutingModule
  ]
})
export class MembershipModule { }
