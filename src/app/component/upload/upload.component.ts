import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  files: File[] = [];

  ngOnInit(): void {
  }

  onSelect(event): void {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event): void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload(): void {
    axios.post('http://localhost:5000/api/upload', this.files);
    console.log('upload file' + this.files[0].name);
  }
}
