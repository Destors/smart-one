import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAddPriductImageDialogComponent } from './client-add-priduct-image-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [ClientAddPriductImageDialogComponent],
  imports: [CommonModule, DialogModule, ButtonModule, FileUploadModule],
  exports: [ClientAddPriductImageDialogComponent],
})
export class ClientAddPriductImageDialogModule {}
