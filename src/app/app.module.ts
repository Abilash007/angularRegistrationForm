import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationButtonComponent } from './registration-button/registration-button.component';
import { ButtonModule } from 'primeng/button';
import { UserRegistrationModule } from './user-registration/user-registration.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    UserRegistrationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
