import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[] = [
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product1.jpg',25)

  ]
  constructor() {}

  ngOnInit() {
  }

}
