import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSelectedProductsPageRoutingModule } from './client-selected-products-page-routing.module';
import { ClientSelectedProductsPageComponent } from './client-selected-products-page.component';
import { ProductsApiService } from '../../api/products-api.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ClientFavoriteProductTableModule } from '../ui/table/client-favorite-product-table.module';
import { ProductsApiModule } from '../../api/products-api.module';

@NgModule({
  declarations: [ClientSelectedProductsPageComponent],
  imports: [
    CommonModule,
    ProductsApiModule,
    ClientSelectedProductsPageRoutingModule,
    ClientFavoriteProductTableModule,
    ToastModule,
    CardModule,
  ],
  providers: [MessageService],
})
export class ClientSelectedProductsPageModule {}
