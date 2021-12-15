import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { UppercaseDirective } from './uppercase.directive';
import { LowercaseDirective } from './lowercase.directive';
import { AvoidSpecialCharacterDirective } from './avoid-special-character.directive';
@NgModule({
  declarations: [
    AppComponent,
    NumbersOnlyDirective,
    UppercaseDirective,
    LowercaseDirective,
    AvoidSpecialCharacterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
