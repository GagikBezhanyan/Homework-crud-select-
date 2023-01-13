import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectCountryRoutingModule } from './select-country-routing.module';
import { SelectCountryComponent } from './select-country.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
  declarations: [
    SelectCountryComponent
  ],
  imports: [
    CommonModule,
    SelectCountryRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SelectCountryModule { }
