import { Component, OnInit } from '@angular/core';
import counties from '../../app/counties.json'
import { Constants } from '../constants'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  counties = counties;

  residenceTypes = Constants.RESIDENCE_TYPES;

  landSizes = Constants.LAND_SIZES;

  constructor() { }

  ngOnInit(): void {
  }

}
