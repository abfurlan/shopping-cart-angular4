import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Product} from '../card-product/card-product.model';
import {CartService} from './cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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

  total() :number{
    return this.cartService.total()
  }

  totalIns() :number{
    return this.cartService.totalIns()
  }

  installments(){
    return this.cartService.installment()
  }

}
