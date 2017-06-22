import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Product} from '../card-product/card-product.model';
import {CartService} from './cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  installments: string = "10"
  totalIns: string = "R$ 100,00"
  total: string = "1.000,00"

  constructor(private cartService: CartService) { }

  ngOnInit() {
    //sessionStorage.removeItem("cart")
    let cartSession = sessionStorage.getItem("cart");
    //carrinho não está vazio
    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);  
    } 
  }
  
  items(): Product[] {
    return this.cartService.items;
  }
  removeItem(Product){
    return this.cartService.removeItem(Product);
  }
}
