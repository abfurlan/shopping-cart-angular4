import {Injectable} from '@angular/core'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Product} from '../card-product/card-product.model'

import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class CartService {

    constructor(){}

    items: Product[] = []

    addItem(item:Product){
        this.items.push(item)
        sessionStorage.setItem("cart",JSON.stringify(this.items))
    }

    removeItem(Product){
        this.items.splice(this.items.indexOf(Product), 1)
        //salva na sessão
        sessionStorage.setItem("cart",JSON.stringify(this.items))   
    }
    
}