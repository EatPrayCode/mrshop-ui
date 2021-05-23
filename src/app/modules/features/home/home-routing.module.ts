import { SubCategoriesBaseComponent } from './components/sub-categories-base/sub-categories-base.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeBaseComponent } from './components/home-base/home-base.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesBaseComponent } from './components/categories-base/categories-base.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: ':categoryType', 
    component: HomeBaseComponent,
    children: [
      {
        path: '',
        component: CategoriesComponent
      },
      {
        path: ':categoryType',
        component: CategoriesBaseComponent,
        children: [
          {
            path: '',
            component: SubCategoriesComponent,
            children: [
              {
                path: '',
                component: SubCategoriesBaseComponent,
              },
              {
                path: ':subCategoryType',
                component: SubCategoriesComponent,
              },
              { 
                path: '**', 
                component:  NotFoundComponent
              }
            ]
          }

        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
