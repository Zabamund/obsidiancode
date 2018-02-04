import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
