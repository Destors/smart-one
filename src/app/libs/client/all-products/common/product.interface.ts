export interface ProductHttpResponse {
  products: Product[];
}

export interface Product {
  id?: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  description: string;
  favorite?: boolean;
}

export interface AddProductFormModel extends Product {}

export enum ProductFormField {
  Title = 'title',
  Price = 'price',
  Brand = 'brand',
  Category = 'category',
  Description = 'description',
}
