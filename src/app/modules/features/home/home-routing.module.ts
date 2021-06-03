import { SubCategoriesBaseComponent } from './components/sub-categories-base/sub-categories-base.component';
import { PackCheckoutComponent } from './components/pack-checkout/pack-checkout.component';
import { PackCustomiseComponent } from './components/pack-customise/pack-customise.component';
import { PackCustomiseBaseComponent } from './components/pack-customise-base/pack-customise-base.component';
import { PackDetailComponent } from './components/pack-detail/pack-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeBaseComponent } from './components/home-base/home-base.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesBaseComponent } from './components/categories-base/categories-base.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';
import { PackdetailBaseComponent } from './components/packdetail-base/packdetail-base.component';

const routes: Routes = [
  {
    path: '',
    component: HomeBaseComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: ':categoryType',
        component: CategoriesBaseComponent,
        children: [
          {
            path: '',
            component: CategoriesComponent
          },
          {
            path: ':subCategoryType',
            component: SubCategoriesBaseComponent,
            children: [
              {
                path: '',
                component: SubCategoriesComponent
              },
              {
                path: ':packId',
                component: PackdetailBaseComponent,
                children: [
                  {
                    path: '',
                    component: PackDetailComponent
                  },
                  {
                    path: 'customise',
                    component: PackCustomiseBaseComponent,
                    children: [
                      {
                        path: '',
                        component: PackCustomiseComponent,
                      },
                      {
                        path: 'checkout',
                        component: PackCheckoutComponent,
                      },
                    ]
                  },
                ]
              },
            ]
          },
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
