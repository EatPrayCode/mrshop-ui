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


@NgModule({
  declarations: [
    HomeComponent,
    CategoriesBaseComponent,
    CategoriesComponent,
    SubCategoriesBaseComponent,
    SubCategoriesComponent,
    HomeBaseComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
