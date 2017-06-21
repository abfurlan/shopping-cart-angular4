import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Product} from './card-product.model'

import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class ProductsService {

    constructor(private http: Http){}

    products(): Observable<Product[]> {
      return this.http.get('http://localhost:3000/items')
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
        
        
    }

    /*
    restaurantById(id: string): Observable<Restaurant>{
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
      return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
    */
}