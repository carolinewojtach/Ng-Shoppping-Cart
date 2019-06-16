import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product, ProductResult, ProductInCart } from 'src/product';
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
  productInCart: ProductInCart;
  amount: number;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  addProductToCart(product) {
    if (this.productInCart === undefined) {
      this.productInCart = { id: product.id, name: product.name, amount: 1, price: product.price } as ProductInCart;
    }
    console.log(this.productInCart);

    this.cartService
      .addProductToCart({
        id: this.productInCart.id, name: this.productInCart.name, amount: this.productInCart.amount, price: this.productInCart.price
      } as ProductInCart)
      .subscribe(() => this.getProducts());
  }
}
