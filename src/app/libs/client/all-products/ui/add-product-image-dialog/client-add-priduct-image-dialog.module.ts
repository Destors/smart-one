import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAddPriductImageDialogComponent } from './client-add-priduct-image-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ClientAddPriductImageDialogComponent],
  imports: [CommonModule, DialogModule, ButtonModule],
  exports: [ClientAddPriductImageDialogComponent],
})
export class ClientAddPriductImageDialogModule {}
