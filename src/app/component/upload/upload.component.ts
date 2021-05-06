import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  file: File = null;

  ngOnInit(): void {
  }

  onSelect(event): void {
    this.file = event.addedFiles[0];
  }

  onRemove(): void {
    this.file = null;
  }

  upload(): void {
    const formData = new FormData();
    formData.append('file', this.file);
    const config = { headers: {'Content-Type': 'multipart/form-data'} };
    axios.post(environment.uploadUrl, formData, config);
  }
}
