import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Product} from '../card-product/card-product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() products : Product[]
  totalIns: string = "em 10x R$ 100,00"
  total: string = "ou R$ 1.000,00 à vista"
  constructor() { }

  ngOnInit() {
    this.updateCart()
  }
  updateCart(){
    var cartSession = sessionStorage.getItem("cart");
    //carrinho não está vazio
  	var total = 0;//armazenar total
  	var totalInstallment = 0; //total parcelado
  	var installments = 0;//parcelas
  	if(cartSession != null){
  		this.products = JSON.parse(cartSession).items;
      console.log(this.products);
    }
  }

}
