import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product, ProductInCart } from 'src/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: Product;

  constructor(private route: ActivatedRoute, private cartService: CartService, private productService: ProductService) { }

  ngOnInit() {
    this.getProductById();
  }

  public getProductById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
      .then(res => this.product = res);
  }

  addProductToCart(product) {
    this.cartService
      .addProductToCart({
        id: product.id, name: product.name, amount: product.amount, price: product.price
      } as ProductInCart)
      .subscribe(() => this.getProductById());
  }
}
