import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDelProductDialogComponent } from './client-del-product-dialog.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [ClientDelProductDialogComponent],
  imports: [CommonModule, ConfirmDialogModule],
})
export class ClientDelProductDialogModule {}
