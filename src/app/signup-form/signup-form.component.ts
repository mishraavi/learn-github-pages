import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

}
