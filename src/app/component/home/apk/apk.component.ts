import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apk',
  templateUrl: './apk.component.html',
  styleUrls: ['./apk.component.css']
})
export class ApkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(): void {
    console.log('Clicked');
  }
}
