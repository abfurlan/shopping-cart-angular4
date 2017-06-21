import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	items: string = "1"
  	totalIns: string = "em 10x R$ 100,00"
  	total: string = "ou R$ 1.000,00 à vista"

  	constructor() { }

  	ngOnInit() {

  	}

}
