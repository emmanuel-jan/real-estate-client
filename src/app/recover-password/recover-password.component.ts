import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  state = 'init';

  changeState(){
    this.state = 'finish';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
