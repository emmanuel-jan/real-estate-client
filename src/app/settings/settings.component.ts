import { Component, OnInit } from '@angular/core';
import counties from '../../app/counties.json'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  counties;

  residenceTypes = ["RURAL","URBAN"];

  landSizes = ["1/4 acre","1/8 acre","1/2 acre","1 acre","100 by 100"];

  constructor() { }

  ngOnInit(): void {
    this.counties = counties 
  }

}
