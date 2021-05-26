import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Product } from 'src/app/components/product/models/product.model';
import { HeaderService } from './../../components/template/header/header.service';
import { ProductService } from './../../components/product/services/product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  products: Product[];
  displayedColumns = ['id','name','price','action']
  constructor(
    private router: Router,
    private productService: ProductService,
    private headerService: HeaderService  
  ) { 
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
    this.productService.get().subscribe(products => {
      this.products = products;
    })
  }

  handleSubmit(): void{
    this.router.navigate(['/products/create']);
  }


}
