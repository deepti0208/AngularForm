// import { AbstractControl, ControlContainer } from "@angular/forms";

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmpassword = control.get('confirmpassword');
  
    return password && confirmpassword && password.value != confirmpassword.value ? 
    { 'mismatch': true } : null;
  };