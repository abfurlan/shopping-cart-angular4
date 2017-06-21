export interface Product {
  product : {
	  id: string
	  name: string
	  images: string[]
	  price	: {
	  	value: string
        installments: string,
        installmentValue : string
	  }
  }
  
}