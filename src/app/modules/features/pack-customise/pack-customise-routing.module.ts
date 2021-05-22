import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackCustomiseComponent } from './components/pack-customise/pack-customise.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PackCustomiseComponent,
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackCustomiseRoutingModule { }
