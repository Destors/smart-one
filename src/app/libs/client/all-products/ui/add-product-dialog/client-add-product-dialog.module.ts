import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAddProductDialogComponent } from './client-add-product-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [ClientAddProductDialogComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextareaModule,
  ],
  exports: [ClientAddProductDialogComponent],
})
export class ClientAddProductDialogModule {}
