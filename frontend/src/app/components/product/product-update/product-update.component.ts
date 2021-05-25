import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Product } from './../models/product.model';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

  updateProduct():void{
    //this.productService.update(product);
    this.router.navigate(['/products']);
  }

}
