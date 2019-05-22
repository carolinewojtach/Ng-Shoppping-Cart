import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product, ProductResult } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {
  }

  public getCart(): Observable<ProductResult> {
    return this.http
      .get<ProductResult>(`${this.url}`);
    // .pipe(map(response => response.value));
  }

  public getProductInCart(id: number) {

  }


  public addProductToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}`, product);
  }

  public deleteProductFromCart(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/${id}`);
  }
}
