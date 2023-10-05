import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { LanguagesPipe } from './pipes/languages.pipe';
import { CurrenciesPipe } from './pipes/currencies.pipe';
import { NativeNamePipe } from './pipes/native-name.pipe';
import { NamePipe } from './pipes/name.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    LanguagesPipe,
    CurrenciesPipe,
    NativeNamePipe,
    NamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LanguagesPipe,
    CurrenciesPipe,
    NativeNamePipe,
    NamePipe
  ]
})
export class SharedModule { }
