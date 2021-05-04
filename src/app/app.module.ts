import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ApkComponent } from './component/apk/apk.component';
import { UrlComponent } from './component/url/url.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { UploadComponent } from './component/upload/upload.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ApkComponent,
    UrlComponent,
    UploadComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    NgxDropzoneModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'upload', component: UploadComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
