import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from  '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3333/products'

  constructor( 
    private snackBar: MatSnackBar,
    private http: HttpClient  
  ) { }

  showMessage(msg: string): void{
    this.snackBar.open(
      msg,
      'X',
      {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ['green-snackbar']
      })
  };

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product);
  }

  get(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }
}
