import { LocalSyncStorage } from 'src/app/libs/core/storage/local/local-sync.storage';
import {
  Product,
  ProductHttpResponse,
} from '../../all-products/common/product.interface';

export class FavoriteProduct implements Product {
  productResponse?: ProductHttpResponse;
  favorite: boolean;
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public brand: string,
    public category: string,
    public description: string,
    private localStorage: LocalSyncStorage
  ) {
    this.favorite = this.getProductLocalState(this.id);
  }

  getProductLocalState(id: number) {
    let localData = this.localStorage.getItem(id.toString());
    return localData ? true : false;
  }
}
