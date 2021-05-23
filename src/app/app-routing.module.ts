import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/components/full/full.component';
import { OrdersuccessComponent } from './modules/shared/components/ordersuccess/ordersuccess.component';

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
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/core/auth/auth.module').then(
            (m) => m.AuthModule
          )
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/features/about/about.module').then(
            (m) => m.AboutModule
          )
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/core/settings/settings.module').then(
            (m) => m.SettingsModule
          )
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/core/account/account.module').then(
            (m) => m.AccountModule
          )
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./modules/features/contact/contact.module').then(
            (m) => m.ContactModule
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
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          )
      },
      {
        path: 'order-success',
        component: OrdersuccessComponent
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
