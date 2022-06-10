import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumarComponent } from './components/sumar/sumar.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    SumarComponent,
    CronometroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
