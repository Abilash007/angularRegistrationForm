import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { SubmitRegistrationComponent } from './submit-registration/submit-registration.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [SubmitRegistrationComponent, RegisterConfirmationComponent],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    SliderModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    ChipsModule,
    CheckboxModule,
    InputTextareaModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    ReactiveFormsModule,
    PanelModule,
    MessagesModule,
    MessageModule
  ],
  providers: [HttpClient]
})
export class UserRegistrationModule { }
