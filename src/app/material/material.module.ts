import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';

const material = [
  MatToolbarModule,
  MatGridListModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatPaginatorModule,
  MatTabsModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
