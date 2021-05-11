import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {

  data: object = {
    decompiler1: [{ path: 'path', link: 'link'}, { path: 'path', link: 'link'}],
    decompiler2: [{ path: 'path', link: 'link'}, { path: 'path', link: 'link'}]
  };

  constructor() { }

  ngOnInit(): void {
    // axios
    //   .get(environment.backendUrl + environment.linkEndpoint)
    //   .then(r => this.data = r.data );
  }

}
