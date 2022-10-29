import { Component, OnInit } from '@angular/core';
import { CarproductService } from '../carproduct.service';
import { carproduct } from '../carproduct';

@Component({
  selector: 'app-onsale',
  templateUrl: './onsale.component.html',
  styleUrls: ['./onsale.component.css']
})
export class OnsaleComponent implements OnInit {

  products: carproduct[]=[];

  constructor(private ps: CarproductService) {
    this.products = this.ps.retrieveProducts();
   }

  ngOnInit(): void {
  }
/*
  products = [
    {
      "name": "Durian",
      "price": 20,
      "stock": 100
    },
    {
      "name": "Apple",
      "price": 5,
      "stock": 1000
    },
    {
      "name": "Orange",
      "price": 3,
      "stock": 500
    },

  ]
  */
}
