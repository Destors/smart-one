import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAddProductDialogComponent } from './client-add-product-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientAddProductDialogComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ClientAddProductDialogComponent],
})
export class ClientAddProductDialogModule {}
