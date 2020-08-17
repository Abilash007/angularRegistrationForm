import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitRegistrationComponent } from './submit-registration/submit-registration.component';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';

const routes: Routes = [
  {
    path: 'userDetails',
    component: SubmitRegistrationComponent
  },
  {
    path: 'userConfirmation',
    component: RegisterConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegistrationRoutingModule { }
