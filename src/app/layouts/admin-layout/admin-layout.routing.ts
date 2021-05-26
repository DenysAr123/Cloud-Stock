import { Routes } from '@angular/router';
import { AlmacenComponent } from 'app/pages/Modulos/Almacen_M/almacen/almacen.component';
import { RealizarVentaComponent } from 'app/pages/Modulos/Ventas/realizar-venta/realizar-venta.component';
import { ConfigAlmacenComponent } from 'app/pages/Modulos/Almacen_M/config-almacen/config-almacen.component'


export const AdminLayoutRoutes: Routes = [
    { path: 'almacen', component: AlmacenComponent },
    { path: 'configAlmacen', component: ConfigAlmacenComponent},
    { path: 'realizarVentas', component: RealizarVentaComponent},
];
