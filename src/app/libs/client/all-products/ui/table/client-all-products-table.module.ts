import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAllProductsTableComponent } from './client-all-products-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [ClientAllProductsTableComponent],
  imports: [CommonModule, TableModule],
  exports: [ClientAllProductsTableComponent],
})
export class ClientAllProductsTableModule {}
