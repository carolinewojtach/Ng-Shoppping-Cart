import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResult, ProductInCart, Cart } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {
  }

  public getCart(): Observable<Cart> {
    return this.http
      .get<Cart>(`${this.url}`);
  }

  public getProductInCart(id: number): Promise<ProductInCart> {
    return this.http.get<ProductInCart>(`${this.url}/${id}`).
      toPromise();
  }

  public addProductToCart(product: ProductInCart): Observable<ProductInCart> {
    return this.http.post<ProductInCart>(`${this.url}`, product);
  }

  public deleteProductFromCart(id: number): Observable<ProductInCart> {
    return this.http.delete<ProductInCart>(`${this.url}/${id}`);
  }
}
