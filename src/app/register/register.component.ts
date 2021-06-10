import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // declare a class that will carry form data
  registerData;

  passwordMissMatch: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private auth: AuthService,
    private router: Router

  ) {
    this.registerData = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  register() {
    //call the service to save the token

    if (this.registerData.value.password != this.registerData.value.confirmPassword) {
      this.passwordMissMatch = true;
    }

    if (!this.passwordMissMatch) {

      // remove the confirmPassword key -> We do not expect it to be sent to the server
      delete this.registerData.value["confirmPassword"];

      console.log(this.registerData.value);

      // call service to register user
      this.auth.registerUser(this.registerData.value).subscribe(
        () => {
          this.router.navigate(['/login']);
        },
        (err) => {
          console.log(err);
        }
      )
    }

  }

  ngOnInit(): void {

  }

}
