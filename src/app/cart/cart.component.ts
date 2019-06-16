import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  cost: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.productsInCart = this.cartService.getCart();
  }

  deleteProductFromCart(id: number) {
    this.cartService.deleteProductFromCart(id).subscribe(
      () => this.getCart()
    );
  }

}
