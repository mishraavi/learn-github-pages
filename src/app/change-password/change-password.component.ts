import { CustomPasswordValidator } from './custom-validator';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl , FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

form;

constructor(fb: FormBuilder) {
  this.form = fb.group({
    oldPassword: ['', Validators.required, CustomPasswordValidator.oldPasswordCheck],
    newPassword: ['', Validators.required],
    cnfPassword: ['', Validators.required]
  }, {
    vlidator: CustomPasswordValidator.passwordMatch
  });
}

testing() {
  console.log(this.form);
}
get oldPassword() {
  return this.form.get('oldPassword');
}

get newPassword() {
  return this.form.get('newPassword');
}

get cnfPassword() {
  return this.form.get('cnfPassword');
}

}
