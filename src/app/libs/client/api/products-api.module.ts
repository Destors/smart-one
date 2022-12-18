import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ErrorsInterceptorsModule } from '../../errors/interceptors/errors-interceptors.module';
import { ProductsApiService } from './products-api.service';

@NgModule({
  imports: [HttpClientModule, ErrorsInterceptorsModule],
  providers: [ProductsApiService],
})
export class ProductsApiModule {}
