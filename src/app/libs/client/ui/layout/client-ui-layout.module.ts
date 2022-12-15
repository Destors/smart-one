import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientUiLayoutComponent } from './client-ui-layout.component';
import { RouterModule } from '@angular/router';
import { ClientUiSidebarModule } from './components/sidebar/client-ui-sidebar.module';
import { ClientUiHeaderModule } from './components/header/client-ui-header/client-ui-header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClientUiSidebarModule,
    ClientUiHeaderModule,
  ],
  declarations: [ClientUiLayoutComponent],
  exports: [ClientUiLayoutComponent],
})
export class ClientUiLayoutModule {}
