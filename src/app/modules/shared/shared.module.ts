import { CustomiseItemsTableComponent } from './components/customise-items-table/customise-items-table.component';
import { DemoMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackListComponent } from './components/pack-list/pack-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AppSpinnerDirective } from './directives/app-spinner';
import { OrdersuccessComponent } from './components/ordersuccess/ordersuccess.component';
import { CustomizeComponent } from './components/customize/customize.component';
import { CategoriesAboutComponent } from './components/categories-about/categories-about.component';

@NgModule({
  declarations: [
    PackListComponent,
    NotFoundComponent,
    SpinnerComponent,
    AppSpinnerDirective,
    OrdersuccessComponent,
    CustomizeComponent,
    CategoriesAboutComponent,
    CustomiseItemsTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  exports: [
    PackListComponent,
    NotFoundComponent,
    SpinnerComponent,
    AppSpinnerDirective,
    CustomizeComponent,
    CategoriesAboutComponent,
    DemoMaterialModule,
    CustomiseItemsTableComponent
  ],
  entryComponents: [
    SpinnerComponent
  ]
})
export class SharedModule { }
