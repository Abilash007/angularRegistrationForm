import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-button',
  templateUrl: './registration-button.component.html',
  styleUrls: ['./registration-button.component.css']
})
export class RegistrationButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRegistration(event) {
    this.router.navigateByUrl('/register/userDetails');
  }

}
