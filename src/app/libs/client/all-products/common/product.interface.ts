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
