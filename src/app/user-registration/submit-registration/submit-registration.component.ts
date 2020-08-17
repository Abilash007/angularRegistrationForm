import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../../common-service.service';
import { RegisterValidation } from '../../validation';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-submit-registration',
  templateUrl: './submit-registration.component.html',
  styleUrls: ['./submit-registration.component.css']
})
export class SubmitRegistrationComponent implements OnInit, DoCheck {
  selectAgeRange: number;
  states: any;
  country: any;
  selectedValues: string[] = [];
  uploadedFiles: any[] = [];
  registerForm: FormGroup;
  submitDisableBtn: boolean = true;
  address: any;
  showHomeAddress: any;
  showCompanyAddress: any;
  showLabel1: any;
  showLabel2: any;
  editFunctionality: boolean;
  imageURl: any;
  imagePath: any;
  constructor(private router: Router,
    private fb: FormBuilder,
    private commonService: CommonServiceService,
    private sanitizeer: DomSanitizer) {
    this.states = [
      { label: 'Select State', value: null },
      { label: 'Alaska', value: { id: 1, name: 'Alaska', code: 'Al' } },
      { label: 'Arizona', value: { id: 2, name: 'Arizona', code: 'Ar' } },
      { label: 'California', value: { id: 3, name: 'California', code: 'Cl' } },
    ];

    this.country = [
      { label: 'Select State', value: null },
      { label: 'united states of america', value: { id: 1, name: 'USA', code: 'US' } },
    ];

    this.address = [
      { label: 'Select State', value: null },
      { label: 'Home', value: { id: 1, name: 'Home', code: 'H' } },
      { label: 'Company', value: { id: 2, name: 'Company', code: 'C' } },
    ];
  }

  ngOnInit(): void {
    this.editFunctionality = false;
    this.createForm();
    if (this.commonService.enteredValues) {
      this.editFunctionality = true;
      this.setFormGroupValues();
      const objUrl = this.commonService.uploadedPhoto[0];
      this.imageURl = this.commonService.createImageFromBlob(objUrl);
      this.imagePath = this.sanitizeer.bypassSecurityTrustResourceUrl(this.imageURl);
    }
  }

  onSelect(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.commonService.getphoto(this.uploadedFiles);
  }

  navigateToCofirmation() {
    const registerValues = {
      firstName: this.registerForm['controls'].firstName.value,
      lastName: this.registerForm['controls'].lastName.value,
      age: this.registerForm['controls'].age.value,
      email: this.registerForm['controls'].email.value,
      tel: this.registerForm['controls'].tel.value,
      state: this.registerForm['controls'].state.value,
      country: this.registerForm['controls'].country.value,
      address: this.registerForm['controls'].address.value,
      address1: this.registerForm['controls'].address1.value,
      address2: this.registerForm['controls'].address2.value,
      interests: this.registerForm['controls'].interests.value,
      subscribe: this.registerForm['controls'].subscribe.value,
      photo: this.registerForm['controls'].photo.value,
    };

    this.commonService.getValues(registerValues);
    this.router.navigateByUrl('/register/userConfirmation');
  }

  setFormGroupValues() {
    this.registerForm.setValue({
      firstName: this.commonService.enteredValues.firstName,
      lastName: this.commonService.enteredValues.lastName,
      age: this.commonService.enteredValues.age,
      email: this.commonService.enteredValues.email,
      tel: this.commonService.enteredValues.tel,
      state: this.commonService.enteredValues.state,
      country: this.commonService.enteredValues.country,
      address: this.commonService.enteredValues.address,
      address1: this.commonService.enteredValues.address1,
      address2: this.commonService.enteredValues.address2,
      interests: this.commonService.enteredValues.interests,
      subscribe: this.commonService.enteredValues.subscribe,
      photo: this.commonService.enteredValues.photo,
    });
    this.showHomeAddress = true;
    this.showCompanyAddress = true;
  }

  ngDoCheck() {
    this.submitDisableBtn = true;
    if (this.registerForm.status === "VALID") {
      this.submitDisableBtn = false;
      return this.submitDisableBtn;
    }
  }
  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', RegisterValidation.Name],
      lastName: ['', RegisterValidation.Name],
      age: ['', Validators.required],
      email: ['', RegisterValidation.email],
      tel: ['', RegisterValidation.mobileNumber],
      state: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      interests: ['', Validators.required],
      subscribe: ['', Validators.required],
      photo: ['', '']
    });
  }

  addressOnChange(event) {
    this.showLabel1 = '';
    this.showLabel2 = '';
    if (event.value.id === 1) {
      this.showHomeAddress = true;
      this.showLabel1 = 'Home Address 1';
      this.showLabel2 = 'Home Address 2';
    } else {
      this.showCompanyAddress = true;
      this.showLabel1 = 'Company Address 1';
      this.showLabel2 = 'Company Address 2';
    }
  }
}
