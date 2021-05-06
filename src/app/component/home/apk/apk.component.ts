import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-apk',
  templateUrl: './apk.component.html',
  styleUrls: ['./apk.component.css']
})
export class ApkComponent implements OnInit {

  apks: object[] = [{name: 'test', date: 'test'}];

  constructor() { }

  ngOnInit(): void {
    axios
      .get(environment.backendUrl + environment.apkEndpoint)
      .then(r => this.apks = r.data.apks );
  }

  test(): void {
    console.log('Clicked');
  }
}
