import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/features/landing/landing.module').then(
            (m) => m.LandingModule
          )
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./modules/features/blog/blog.module').then(
            (m) => m.BlogModule
          )
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/features/home/home.module').then(
            (m) => m.HomeModule
          )
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
