import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { CountryListComponent } from './country-list/country-list.component';
import { ListElementComponent } from './country-list/list-element/list-element.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CountryListComponent,
    ListElementComponent,
    FilterComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class PublicModule { }
