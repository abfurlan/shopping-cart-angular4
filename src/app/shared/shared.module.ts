import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


import {ProductsService} from '../card-product/card-product.service'

@NgModule({
  
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule,
            FormsModule, ReactiveFormsModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[ProductsService]
    }
  }
}