import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Product} from '../card-product/card-product.model';
import {CartService} from './cart.service'
import { default as swal } from 'sweetalert2'

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
    let c = this.cartService
    swal({
      title: 'Confirmação',
      text: "Você tem certeza que deseja remover este item do carrinho?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#449d44',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    }).then(function () {
      swal(
      'Excluído!',
      'Item excluído do carrinho.',
      'success'
      )
      return c.removeItem(Product)
    })

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
