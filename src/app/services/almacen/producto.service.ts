import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public productolist:any;

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/producto', httpOptions);
  }


  searchProducts(termino:string=''){
    return this.productolist.filter(x=>x.descripcion.toLowerCase().search(termino.toLocaleLowerCase())>=0)
  }


  insertProduct(produto:any): Observable<any[]>{
    return this.http.post<any[]>('http://localhost:3000/producto',JSON.stringify(produto), httpOptions);
  }

  updateProduct(produto:any): Observable<any[]>{
    return this.http.put<any[]>('http://localhost:3000/producto',JSON.stringify(produto), httpOptions);
  }


  deleteProduct(idproducto:any): Observable<any>{
    return this.http.delete<any>('http://localhost:3000/producto/'+ idproducto, httpOptions)
  }







}
