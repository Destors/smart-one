import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientUiSidebarComponent } from './client-ui-sidebar.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [ClientUiSidebarComponent],
  imports: [CommonModule, PanelMenuModule, CardModule],
  exports: [ClientUiSidebarComponent],
})
export class ClientUiSidebarModule {}
