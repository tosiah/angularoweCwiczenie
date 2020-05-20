import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { GuessComponent } from './guess/guess.component';
import { CipherComponent } from './cipher/cipher.component';

@NgModule({
  declarations: [
    AppComponent,
    GuessComponent,
    CipherComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
