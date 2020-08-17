import {Validators, ValidatorFn} from '@angular/forms';


export class RegisterValidation {
    static integer: RegExp = /^[-+]?\d+$/;
    static username: RegExp = /^([a-zA-Z ]){2,30}$/;
    static emailId: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    public static mobileNumber: ValidatorFn[] = [Validators.pattern(RegisterValidation.integer)];
    public static Name: ValidatorFn[] = [Validators.pattern(RegisterValidation.username), Validators.maxLength(20)];
    public static email: ValidatorFn[] = [Validators.pattern(RegisterValidation.emailId)];
}
