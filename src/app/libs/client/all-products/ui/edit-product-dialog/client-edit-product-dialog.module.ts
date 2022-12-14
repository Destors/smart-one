import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientEditProductDialogComponent } from './client-edit-product-dialog.component';

@NgModule({
  declarations: [ClientEditProductDialogComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [ClientEditProductDialogComponent],
})
export class ClientEditProductDialogModule {}
