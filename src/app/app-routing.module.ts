import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationButtonComponent } from './registration-button/registration-button.component';


/**
 * implemented Lazy loading
 */

const routes: Routes = [
  {
    path: '',
    component: RegistrationButtonComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./../app/user-registration/user-registration.module').then(m => m.UserRegistrationModule)
  },
  {
    path: '**',
    component: RegistrationButtonComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
