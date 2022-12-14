import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientEditProductDialogComponent } from './client-edit-product-dialog.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [ClientEditProductDialogComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
  ],
  exports: [ClientEditProductDialogComponent],
})
export class ClientEditProductDialogModule {}
