import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Product } from './../models/product.model';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.productService.getById(id).subscribe(product => {
      this.product = product
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

  updateProduct():void{
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto alterado com sucesso!")
      this.router.navigate(['/products']);
    });
  }

}
