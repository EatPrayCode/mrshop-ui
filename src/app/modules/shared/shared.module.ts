import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './components/shared/shared.component';
import { PackListComponent } from './components/pack-list/pack-list.component';


@NgModule({
  declarations: [
    SharedComponent,
    PackListComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    PackListComponent
  ]
})
export class SharedModule { }
