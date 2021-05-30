import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackListComponent } from './components/pack-list/pack-list.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ChartWrapperComponent } from './components/chart-wrapper/chart-wrapper.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AppSpinnerDirective } from './directives/app-spinner';
import { HighchartsChartModule } from 'highcharts-angular';
import { OrdersuccessComponent } from './components/ordersuccess/ordersuccess.component';
import { CustomisePackComponent } from './components/customise-pack/customise-pack.component';
import { CustomizeComponent } from './components/customize/customize.component';

@NgModule({
  declarations: [
    PackListComponent,
    NotFoundComponent,
    SpinnerComponent,
    AppSpinnerDirective,
    ChartWrapperComponent,
    BarChartComponent,
    OrdersuccessComponent,
    CustomisePackComponent,
    CustomizeComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PackListComponent,
    NotFoundComponent,
    SpinnerComponent,
    AppSpinnerDirective,
    HighchartsChartModule,
    ChartWrapperComponent,
    BarChartComponent,
    CustomisePackComponent
  ],
  entryComponents: [
    SpinnerComponent
  ]
})
export class SharedModule { }
