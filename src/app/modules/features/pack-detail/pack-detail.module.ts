import { PackDetailRoutingModule } from './pack-detail-routing.module';
import { PackDetailComponent } from './components/pack-detail/pack-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PackDetailComponent
  ],
  imports: [
    CommonModule,
    PackDetailRoutingModule
  ]
})
export class PackDetailModule { }
