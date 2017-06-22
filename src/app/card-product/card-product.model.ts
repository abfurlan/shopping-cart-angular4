export interface Product {
  product : {
	  id: string
	  name: string
	  images: string[]
	  price	: {
	  	value: number
        installments: number,
        installmentValue : number
	  }
  }
  
}