import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PublicRoutingModule } from './public-routing.module';
import { CountryListComponent } from './country-list/country-list.component';
import { ListElementComponent } from './country-list/list-element/list-element.component';



@NgModule({
  declarations: [
  
    CountryListComponent,
       ListElementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
