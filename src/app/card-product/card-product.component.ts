import { Component, OnInit } from '@angular/core';
import {Product} from './card-product.model';
import {ProductsService} from './card-product.service';
import {CartComponent} from '../cart/cart.component'

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  products : Product[]

  constructor(private productsService: ProductsService) { }
  //constructor() { }

  ngOnInit() {
  	this.productsService.products()
      .subscribe(products => this.products = products)
  }

  addCart(Product){
    //recupera carrinho na sessão
    let cartSession = sessionStorage.getItem("cart")
    let cart = {items:[]};
    //carrinho não está vazio
    if(cartSession != null){
      cart = JSON.parse(cartSession)
    }
    //adiciona no carrinho
    cart.items.push(Product)
    //salva na sessão
    sessionStorage.setItem("cart",JSON.stringify(cart))
    console.log(cart)
    //sessionStorage.removeItem("cart")
    

  }


}
