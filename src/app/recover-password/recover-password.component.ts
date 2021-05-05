import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  state = 'init';

  newPassword;

  email;

  resetKey;

  constructor(
    private auth:AuthService,
    // to extract params
    private activatedRoute:ActivatedRoute
  ) { }

  requestReset(){
    this.auth.requestReset(this.email).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  changePassword(){
    // prepare the data

    const data = {
      newPassword:this.newPassword,
      resetKey:this.resetKey
    }

    this.auth.changePassword(data).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    );
  }


  ngOnInit(): void {
    // extracting the key
    this.activatedRoute.queryParams.subscribe(params=>{
      this.resetKey = params['key'];
    })

    // if there is a key, change state
    if(this.resetKey){
      this.state = 'finish';
    }


  }

}
