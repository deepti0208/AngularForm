import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { passwordValidator } from './password.validator';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  // example of instances created manually

  /* profileForm = new FormGroup({
    name : new FormControl('',Validators.required),
    lname : new FormControl('',Validators.required),
    email : new FormControl(''),
    password : new FormControl(''),
    phone : new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      pincode : new FormControl(''),
    })

  }); */

  //Using FormBuilder
  constructor(private fb:FormBuilder) { }

  profileForm =this.fb.group({
    name : ['',Validators.required],
    lname : ['',Validators.required],
    email : ['',[Validators.required,Validators.email]],
    password : ['',Validators.required],
    confirmpassword : ['',Validators.required],
    phone : ['',[Validators.required, Validators.minLength(10)]],
    // {Validator:this.passwordMatchValidator}
    address : this.fb.group({
      city : ['',Validators.required],
      pincode : ['',[Validators.required,Validators.minLength(6)]],
    }),
//}, {Validators:passwordValidator});
}, { validators: passwordValidator });
  
get name() {return this.profileForm.get('name')}
get lname() {return this.profileForm.get('lname')}
get email() {return this.profileForm.get('email')}
get password() {return this.profileForm.get('password')}
get phone() {return this.profileForm.get('phone')}

onSubmit(){
  console.warn(this.profileForm.value);
}

  ngOnInit(): void {}

}
