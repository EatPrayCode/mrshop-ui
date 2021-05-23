import { PackCustomiseComponent } from './components/pack-customise/pack-customise.component';
import { PackDetailComponent } from './components/pack-detail/pack-detail.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CategoriesBaseComponent } from './components/categories-base/categories-base.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SubCategoriesBaseComponent } from './components/sub-categories-base/sub-categories-base.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { HomeBaseComponent } from './components/home-base/home-base.component';
import { PackdetailBaseComponent } from './components/packdetail-base/packdetail-base.component';
import { PackCustomiseBaseComponent } from './components/pack-customise-base/pack-customise-base.component';
import { PackCheckoutComponent } from './components/pack-checkout/pack-checkout.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesBaseComponent,
    CategoriesComponent,
    SubCategoriesBaseComponent,
    SubCategoriesComponent,
    HomeBaseComponent,
    PackdetailBaseComponent,
    PackDetailComponent,
    PackCustomiseBaseComponent,
    PackCustomiseComponent,
    PackCheckoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
