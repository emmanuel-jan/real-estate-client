import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // declare an object that shall carry form data

  loginData;

  invalidCredentials:boolean = false;

  // we will be using FormBuilder -> ReactiveFormsModule
  // wire -> in a constructor
  constructor(
    private formBuilder:FormBuilder,
    private auth:AuthService,
    private tokenService:TokenService
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
          this.tokenService.saveToken(res.idToken);

          // now get the account
          this.auth.getUser().subscribe(
            (res)=>{
              this.auth.saveUser(res);

              // get the user authority
              const authority = res.authority;

              // redirect a user based on authority
              this.redirectUser(authority);
            },
            (err)=>{
              console.error(err);
            }
          )
       },
       (err)=>{
        //  This sets invalidCredentials to true -> throws an error widget to the dom..
         this.invalidCredentials = true;
       }
     )
   }

   redirectUser(authority:string){
     if(authority=="BUYER"){

     }else if(authority=="SELLER"){

     }else if(authority=="ADMIN"){

     }else{

     }
   }

  ngOnInit(): void {

  }

}
