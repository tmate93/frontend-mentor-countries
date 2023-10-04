import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { LanguagesPipe } from './pipes/languages.pipe';
import { CurrenciesPipe } from './pipes/currencies.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    LanguagesPipe,
    CurrenciesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LanguagesPipe,
    CurrenciesPipe
  ]
})
export class SharedModule { }
