import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // declare an object that shall carry form data

  loginData;

  // we will be using FormBuilder -> ReactiveFormsModule
  // wire -> in a constructor
  constructor(
    private formBuilder:FormBuilder,
    private auth:AuthService
  ) {
    this.loginData = this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
   }

   login(){
     // call the service -> have the callbacks

     this.auth.getToken(this.loginData.value).subscribe(
       (res)=>{
          console.log(res);
          // logic to save the token
       },
       (err)=>{
          console.log(err);
       }
     )
   }

  ngOnInit(): void {

  }

}
