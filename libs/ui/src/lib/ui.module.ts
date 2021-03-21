import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FarmerSearchComponent } from './farmer-search/farmer-search.component';
import { DocumentNumberPipe } from './pipes/document-number.pipes';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [
    FarmerSearchComponent,
    DocumentNumberPipe,
  ],
  exports: [
    FarmerSearchComponent,
    DocumentNumberPipe,
  ],
})
export class UiModule { }