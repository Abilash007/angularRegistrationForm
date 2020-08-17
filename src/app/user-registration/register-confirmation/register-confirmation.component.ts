import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';

@Component({
  selector: 'app-register-confirmation',
  templateUrl: './register-confirmation.component.html',
  styleUrls: ['./register-confirmation.component.css']
})
export class RegisterConfirmationComponent implements OnInit {
  name: any;
  age: any;
  tel: any;
  interest: any;
  state: any;
  email: any;
  valuesToShow: any;
  lastIndexValue: any;
  imageURl: any;
  constructor(private commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.valuesToShow = this.commonService.enteredValues;
    this.lastIndexValue = this.valuesToShow?.interests.pop();
    const objUrl = this.commonService.uploadedPhoto[0];
    this.imageURl = this.commonService.createImageFromBlob(objUrl);
  }
}
