import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAllProductsPageRoutingModule } from './client-all-products-page-routing.module';
import { ClientAllProductsPageComponent } from './client-all-products-page.component';
import { ClientAllProductsTableModule } from '../ui/table/client-all-products-table.module';
import { AllProductsApiService } from '../api/all-products-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ClientAllProductsPageComponent],
  imports: [
    CommonModule,
    ClientAllProductsPageRoutingModule,
    ClientAllProductsTableModule,
    HttpClientModule,
  ],
  providers: [AllProductsApiService],
})
export class ClientAllProductsPageModule {}
