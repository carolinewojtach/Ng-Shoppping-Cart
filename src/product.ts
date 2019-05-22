export interface Product {
  id: number;
  name: string;
  amount: number;
  // photoSrc: string;
}

export interface ProductResult {
  value: Product[];
}
