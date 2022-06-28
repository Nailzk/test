import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Repositories } from 'communication';
import { ExchangeModule } from 'exchange';
import { HeaderModule } from 'header';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Repositories.forRoot(),
    HeaderModule,
    ExchangeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
