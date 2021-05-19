import { ProductService } from './../../components/product/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Product } from 'src/app/components/product/models/product.model';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  products: Product[];

  constructor(
    private router: Router,
    private productService: ProductService  
  ) { }

  ngOnInit(): void {
    this.productService.get().subscribe(products => {
      this.products = products;
    })
  }

  handleSubmit(): void{
    this.router.navigate(['/products/create']);
  }

}
