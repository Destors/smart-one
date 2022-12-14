import { Timestamp } from 'rxjs';

export interface productsGetRes {
  products: Product[];
}

export interface Product {
  title: string;
  price: number;
  brand: string;
  category: string;
  description: string;
}

export interface AddProductFormModel extends Product {}

export enum AddProductFormField {
  Title = 'title',
  Price = 'price',
  Brand = 'brand',
  Category = 'category',
  Description = 'description',
}
