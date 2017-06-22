import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


import {ProductsService} from '../card-product/card-product.service'
import { CartService } from '../cart/cart.service';
@NgModule({
  
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule,
            FormsModule, ReactiveFormsModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[ProductsService,CartService]
    }
  }
}