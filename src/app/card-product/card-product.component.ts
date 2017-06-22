import { Component, OnInit } from '@angular/core';
import {Product} from './card-product.model';
import {ProductsService} from './card-product.service';
import {CartService} from '../cart/cart.service'

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  products : Product[]
  constructor(private productsService: ProductsService, private cartService: CartService) { }
  //constructor() { }

  ngOnInit() {
  	this.productsService.products()
      .subscribe(products => this.products = products)
  }

  addCart(Product){
    this.cartService.addItem(Product)
  }


}
