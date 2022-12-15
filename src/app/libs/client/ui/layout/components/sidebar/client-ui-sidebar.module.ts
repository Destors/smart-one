import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientUiSidebarComponent } from './client-ui-sidebar.component';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [ClientUiSidebarComponent],
  imports: [CommonModule, PanelMenuModule],
  exports: [ClientUiSidebarComponent],
})
export class ClientUiSidebarModule {}
