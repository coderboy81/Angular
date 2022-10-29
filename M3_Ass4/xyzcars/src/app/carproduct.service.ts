import { Injectable } from '@angular/core';
import { carproduct } from './carproduct';
import { products } from './mock-carproduct';

@Injectable({
  providedIn: 'root'
})
export class CarproductService {

  constructor() { }
  retrieveProducts(): carproduct[] {
    return products;
  }

  retrieveProductById(searchId: number): carproduct {
    return products[products.findIndex(f => f.id == searchId)];
  }
}
