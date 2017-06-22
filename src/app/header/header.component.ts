import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    

    constructor(private cartService: CartService) { }

  	ngOnInit() {

  	}
  	items(){
  		return this.cartService.items.length > 0 ? this.cartService.items.length : ""

  	}

}
