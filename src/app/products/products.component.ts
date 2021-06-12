import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[] = [
    new Product(1,'HD Camera','Ksh 600','assets/images/product1.png',25),
    new Product(1,'Double Camera','Ksh 600','assets/images/product2.jpg',25),
    new Product(1,'Super Camera','Ksh 600','assets/images/product3.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product4.jpeg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product5.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product6.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product7.png',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product9.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product9.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product10.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product11.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product12.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product13.jpeg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product14.jpeg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product15.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product16.jpeg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product17.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product18.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product19.jpg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product20.jpeg',25),
    new Product(1,'Trousers','Ksh 600','assets/images/product21.jpg',25)

  ]
  constructor() {}

  ngOnInit() {
  }

}
