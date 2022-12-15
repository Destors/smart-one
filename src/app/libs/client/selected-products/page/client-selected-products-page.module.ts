import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSelectedProductsPageRoutingModule } from './client-selected-products-page-routing.module';
import { ClientSelectedProductsPageComponent } from './client-selected-products-page.component';


@NgModule({
  declarations: [
    ClientSelectedProductsPageComponent
  ],
  imports: [
    CommonModule,
    ClientSelectedProductsPageRoutingModule
  ]
})
export class ClientSelectedProductsPageModule { }
