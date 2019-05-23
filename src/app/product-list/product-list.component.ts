import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product, ProductResult } from 'src/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<ProductResult>;
  selectedProduct: Product;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  // getProductById(id: number) {
  //   this.productService
  //     .getProductById(id)
  //     .then(res => (this.selectedProduct = res));
  // }

  addProductToCart(product) {
    this.cartService
      .addProductToCart({
        id: product.id, name: product.name, amount: 1, price: product.price
      } as Product)
      .subscribe(() => this.getProducts());
  }
}
