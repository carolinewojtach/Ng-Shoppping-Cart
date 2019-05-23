import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product, ProductResult } from 'src/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsInCart: Observable<ProductResult>;
  // selectedProduct: Product;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.productsInCart = this.cartService.getCart();
  }

  // getProductById(id: number) {
  //   this.productService
  //     .getProductById(id)
  //     .then(res => (this.selectedProduct = res));
  // }

  deleteProductFromCart(id: number) {
    this.cartService.deleteProductFromCart(id).subscribe(
      () => this.getCart()
      // (error: HttpErrorResponse) => console.log(error)
    );
  }

}
