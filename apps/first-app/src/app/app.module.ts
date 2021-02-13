import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ENVIRONMENT } from '@environment-token/environment';
import { environment } from '../environments/environment';

import { HomeModule } from '@environment-token/home';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule],
  providers: [
    { provide: ENVIRONMENT, useValue: environment }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
