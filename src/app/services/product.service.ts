import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProductResult, Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<ProductResult> {
    return this.http
      .get<ProductResult>(`${this.url}`);
  }

  public getProductById(id: number): Promise<Product> {
    return this.http.get<Product>(`${this.url}/${id}`).
      toPromise();
  }

  public deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/${id}`);
  }

}
