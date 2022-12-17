import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientUiLayoutComponent } from './libs/client/ui/layout/client-ui-layout.component';
import {
  NAVIGATION_PATHS,
  PATHS,
} from './libs/core/navigation/common/navigation.interface';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: NAVIGATION_PATHS.products },
  {
    path: '',
    component: ClientUiLayoutComponent,
    children: [
      {
        path: NAVIGATION_PATHS.products,
        loadChildren: () =>
          import(
            './libs/client/all-products/page/client-all-products-page.module'
          ).then((m) => m.ClientAllProductsPageModule),
      },
      {
        path: NAVIGATION_PATHS.favorites,
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
  providers: [{ provide: PATHS, useValue: NAVIGATION_PATHS }],
})
export class AppRoutingModule {}
