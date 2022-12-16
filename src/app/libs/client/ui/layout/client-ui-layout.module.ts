import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientUiLayoutComponent } from './client-ui-layout.component';
import { RouterModule } from '@angular/router';
import { ClientUiSidebarModule } from './components/sidebar/client-ui-sidebar.module';
import { ClientUiHeaderModule } from './components/header/client-ui-header/client-ui-header.module';
import { ContainerModule } from 'src/app/libs/ui/container/container.module';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClientUiSidebarModule,
    ClientUiHeaderModule,
    ContainerModule,
    SidebarModule,
    ButtonModule,
  ],
  declarations: [ClientUiLayoutComponent],
  exports: [ClientUiLayoutComponent],
})
export class ClientUiLayoutModule {}
