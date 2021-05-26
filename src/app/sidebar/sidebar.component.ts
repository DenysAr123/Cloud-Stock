import { Component, OnInit } from '@angular/core';
declare var $: any;


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/almacen',       title: 'Almacen',           icon:'nc-tile-56',    class: '' },
    { path: '/ventas',        title: 'Ventas',            icon:'nc-cart-simple',    class: '' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public subitems: any[]=[
        [
            { path: '/almacen',                 title: 'Almacen'},
            { path: '/configAlmacen',           title: 'Configuración'},
        ],
        [
            { path: '/realizarVentas',          title: 'Realizar-Venta'},
            { path: '/movimiento2',             title: 'Movimiento2'},
            { path: '/devoluciones2',           title: 'Devoluciones2'},
            { path: '/kardex2',                 title: 'Kardex2'},
        ]
    ];


    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    showHide(padre:string){
       let listitem =  document.getElementById(`${padre}`);
       
       if(listitem.style.display=='none'|| listitem.style.display ==''){
        listitem.style.display = 'block'; 
       }
       else{
        listitem.style.display = 'none';
       }

    }
   





}
