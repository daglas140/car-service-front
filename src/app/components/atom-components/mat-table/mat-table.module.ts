import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTableComponent } from "@components/atom-components/mat-table/mat-table.component";

@NgModule({
  declarations: [
    MatTableComponent
  ],
  exports: [
    MatTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class MatTableComponentModule { }
