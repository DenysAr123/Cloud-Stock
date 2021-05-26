import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
};



@Injectable({
  providedIn: 'root'
})
export class UnMedidaService {
  
  constructor(private http: HttpClient) {
  }

  public unMedidalist:any;
  

  getAllunMedida(){
    return this.http.get<any[]>('http://localhost:3000/unmed', httpOptions);
  }


  searchunMedida(termino:string=''){
    return this.unMedidalist.filter(x=>x.descripcion.toLowerCase().search(termino.toLocaleLowerCase())>=0)
  }






}