import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAllProductsPageRoutingModule } from './client-all-products-page-routing.module';
import { ClientAllProductsPageComponent } from './client-all-products-page.component';


@NgModule({
  declarations: [
    ClientAllProductsPageComponent
  ],
  imports: [
    CommonModule,
    ClientAllProductsPageRoutingModule
  ]
})
export class ClientAllProductsPageModule { }
