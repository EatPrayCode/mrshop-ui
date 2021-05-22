import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackCustomiseRoutingModule } from './pack-customise-routing.module';
import { PackCustomiseComponent } from './components/pack-customise/pack-customise.component';


@NgModule({
  declarations: [
    PackCustomiseComponent
  ],
  imports: [
    CommonModule,
    PackCustomiseRoutingModule
  ]
})
export class PackCustomiseModule { }
