import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[] = [
    new Product(1,'HD Camera','Ksh 2500','assets/images/product1.png',25),
    new Product(1,'Double Camera','Ksh 3000','assets/images/product2.jpg',25),
    new Product(1,'Super Camera','Ksh 2800','assets/images/product3.jpg',25),
    new Product(1,'Radio System','Ksh3200','assets/images/product4.jpeg',25),
    new Product(1,'Radio System','Ksh 4600','assets/images/product5.jpg',25),
    new Product(1,'Radio System','Ksh 3650','assets/images/product6.jpg',25),
    new Product(1,'Smart Radio','Ksh 9520','assets/images/product7.png',25),
    new Product(1,'Computer System','Ksh 12510','assets/images/product9.jpg',25),
    new Product(1,'Computer System','Ksh 15000','assets/images/product9.jpg',25),
    new Product(1,'Computer System','Ksh 25000','assets/images/product10.jpg',25),
    new Product(1,'Computer Monitor & Keyboard','Ksh 10000','assets/images/product11.jpg',25),
    new Product(1,'Laptop','Ksh 38000','assets/images/product12.jpg',25),
    new Product(1,'Laptop','Ksh 41000','assets/images/product13.jpeg',25),
    new Product(1,'Laptop','Ksh 45000','assets/images/product14.jpeg',25),
    new Product(1,'Laptop','Ksh 60000','assets/images/product15.jpg',25),
    new Product(1,'Sterio Headphones','Ksh 600','assets/images/product16.jpeg',25),
    new Product(1,'Samsung Galaxy 20','Ksh 21500','assets/images/product17.jpg',25),
    new Product(1,'Iphone 8','Ksh 45000','assets/images/product18.jpg',25),
    new Product(1,'Camon 21','Ksh 14000','assets/images/product19.jpg',25),
    new Product(1,'Headphones','Ksh 1500','assets/images/product20.jpeg',25),
    new Product(1,'Head Phones','Ksh 1000','assets/images/product21.jpg',25)

  ]
  constructor() {}

  ngOnInit() {
  }

}
