import { ProductService } from './../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get("id"));
    this.productService.getById(id).subscribe(product => {
      this.product = product
    })
  }

  cancel():void{
    this.router.navigate(['/products']);
  }

  deleteProduct():void{
    const id = String(this.route.snapshot.paramMap.get("id"));
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage("Deletado o produto com sucesso!");
      this.router.navigate(['/products']);
    })
  }

}
