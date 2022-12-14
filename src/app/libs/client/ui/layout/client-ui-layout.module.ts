import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientUiLayoutComponent } from './client-ui-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ClientUiLayoutComponent],
  exports: [ClientUiLayoutComponent],
})
export class ClientUiLayoutModule {}
