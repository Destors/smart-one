import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientUiLayoutComponent } from './libs/client/ui/layout/client-ui-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'all-products-page' },
  {
    path: '',
    component: ClientUiLayoutComponent,
    children: [
      {
        path: 'all-products-page',
        loadChildren: () =>
          import(
            './libs/client/all-products/page/client-all-products-page.module'
          ).then((m) => m.ClientAllProductsPageModule),
      },
      {
        path: 'selected-products-page',
        loadChildren: () =>
          import(
            './libs/client/selected-products/page/client-selected-products-page.module'
          ).then((m) => m.ClientSelectedProductsPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
