export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ProductResult {
  value: Product[];
}


export interface ProductInCart {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export interface Cart {
  value: ProductInCart[];
}
