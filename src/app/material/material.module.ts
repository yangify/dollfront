import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
