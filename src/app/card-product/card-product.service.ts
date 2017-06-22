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

}
