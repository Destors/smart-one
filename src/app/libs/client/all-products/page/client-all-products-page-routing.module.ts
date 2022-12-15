import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAllProductsPageComponent } from './client-all-products-page.component';

const routes: Routes = [{ path: '', component: ClientAllProductsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAllProductsPageRoutingModule { }
