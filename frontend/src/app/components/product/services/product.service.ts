import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from  '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3333/products'

  constructor( 
    private snackBar: MatSnackBar,
    private http: HttpClient  
  ) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(
      msg,
      'X',
      {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['red-snackbar'] :['green-snackbar']
      })
  };

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    );
  }

  get(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    );
  }

  getById(product_id: string):Observable<Product>{
    const url =`${this.baseUrl}/${product_id}`;
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  update(product: Product): Observable<Product>{
    const url=`${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  delete(id: string):Observable<Product>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  handleError(error: any): Observable<any> {
    this.showMessage('Ocorreu erro, verifique os dados e tente novamente mais tarde.', true);
    return EMPTY;
  }
}
