import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientUiHeaderComponent } from './client-ui-header.component';

import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [ClientUiHeaderComponent],
  imports: [CommonModule, MenubarModule],
  exports: [ClientUiHeaderComponent],
})
export class ClientUiHeaderModule {}
