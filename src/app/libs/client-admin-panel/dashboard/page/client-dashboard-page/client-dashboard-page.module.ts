import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDashboardPageRoutingModule } from './client-dashboard-page-routing.module';
import { ClientDashboardPageComponent } from './client-dashboard-page.component';


@NgModule({
  declarations: [
    ClientDashboardPageComponent
  ],
  imports: [
    CommonModule,
    ClientDashboardPageRoutingModule
  ]
})
export class ClientDashboardPageModule { }
