import { Injectable } from '@angular/core';
import { Product } from './core/product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getProducts(): Product[] {
    return PRODUCTS;
  }
}