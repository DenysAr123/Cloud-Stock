import { Component, OnInit } from '@angular/core';
import { ProductoService} from '../../../../services/almacen/producto.service';

@Component({
  selector: 'app-realizar-venta',
  templateUrl: './realizar-venta.component.html',
  styleUrls: ['./realizar-venta.component.css']
})
export class RealizarVentaComponent implements OnInit {
  productoList:any=[];
  productoListSeleccionados:any=[];
  productoSeleccionado:any=[];
  valorVenta:number = 0;
  igvValor:number = 18;
  totalVenta:number = 0;

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.getAllProductos();

  }
  
  calcularTotal(){
    this.valorVenta = this.productoListSeleccionados.reduce((acc,obj,) => acc + (obj.precio * obj.cantidad),0);
    this.igvValor =  (18 / 100)*this.valorVenta;
    this.totalVenta = this.igvValor + this.valorVenta;
  }
  ngDoCheck(): void {
    this.calcularTotal();
  }
  
  getAllProductos(){
    this.productoService.getAllProducts().toPromise().then(data => {
      this.productoList = data;
      console.log(this.productoList);
    })
  }

  onSelectProducto(producto:any){
    this.productoSeleccionado=producto;
    this.productoSeleccionado.cantidad = 1;
  }
  agregarProduct(){
    this.productoListSeleccionados.push(this.productoSeleccionado);
    this.valorVenta = this.productoListSeleccionados.reduce((a, b) => a + b, 0);
  }
  removeProducto(idx:number){
    this.productoListSeleccionados.splice(idx,1);
  }


}

