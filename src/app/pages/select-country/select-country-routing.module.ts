import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectCountryComponent } from './select-country.component';

const routes: Routes = [
  {
    path:'',
    component: SelectCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectCountryRoutingModule { }
