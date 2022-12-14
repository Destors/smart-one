import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAddProductDialogComponent } from './client-add-product-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ClientAddProductDialogComponent],
  imports: [CommonModule, DialogModule, ButtonModule],
  exports: [ClientAddProductDialogComponent],
})
export class ClientAddProductDialogModule {}
