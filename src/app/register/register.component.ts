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
      password: ['', Validators.required]

    })
  }

  register() {
    //call the service to save the token

    this.auth.registerUser(this.registerData.value).subscribe(
      (res) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {

  }

}
