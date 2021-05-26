import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
};


@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  public marcalist:any;
  
  constructor(private http: HttpClient) {
  }


  getAllmarcas(){
    return this.http.get<any[]>('http://localhost:3000/marca', httpOptions);
  }


  searchmarcas(termino:string=''){
    return this.marcalist.filter(x=>x.descripcion.toLowerCase().search(termino.toLocaleLowerCase())>=0)
  }


  



}
