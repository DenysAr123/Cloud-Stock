import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'app/services/almacen/marca.service';
import { UnMedidaService } from 'app/services/almacen/unmedida.service';
import { ProductoService} from '../../../../services/almacen/producto.service';


@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {
  //Listas
  tituloModal:string;
  productoList:any=[];
  productoSeleccionado:any={};
  productSearch:string='';
  marcaslist:any=[];
  unMedidaList:any=[];
  productoInUpd:any={};
  flag:string='';

  //
  constructor(private productoService:ProductoService, private marcaService:MarcaService,private unMedidaService:UnMedidaService) { 
    
  }
  
  ngOnInit() {
    this.getAllProductos();
    this.getAllMarcas();
    this.getAllUnMedida();
  }
  
  getAllProductos(){
    this.productoService.getAllProducts().toPromise().then(data => {
      this.productoList = data;
    })
  }

  getAllMarcas(){
    this.marcaService.getAllmarcas().toPromise().then(data => {
      this.marcaslist = data;
    })
  }

  getAllUnMedida(){
    this.unMedidaService.getAllunMedida().toPromise().then(data => {
      this.unMedidaList = data;
    })
  }

  


  insertUpdateProducto(){
    if(this.flag =='update'){
      this.productoService.updateProduct(this.productoSeleccionado).toPromise()
      .then(() =>{
        this.getAllProductos();
      })
      .catch(err => alert(err))
    }
    else{
      this.productoService.insertProduct(this.productoSeleccionado).toPromise()
      .then(() =>{
        this.getAllProductos();
      })
      .catch(err => alert(err))
    }
  }


  removeProducto(){
    this.productoService.deleteProduct(this.productoSeleccionado.productoId).toPromise()
    .then(data =>{
      this.getAllProductos();
    })
    .catch(err => alert(err))
  }


  
  searchProduct(){
    this.productoList = this.productoService.searchProducts(this.productSearch);
  }

}
