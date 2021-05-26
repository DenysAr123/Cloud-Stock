import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { CommonModule } from "@angular/common";
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AlmacenComponent } from './pages/Modulos/Almacen_M/almacen/almacen.component';
import { ProductoService } from "./services/almacen/producto.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RealizarVentaComponent } from './pages/Modulos/Ventas/realizar-venta/realizar-venta.component'
import { ConfigAlmacenComponent } from './pages/Modulos/Almacen_M/config-almacen/config-almacen.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AlmacenComponent,
    RealizarVentaComponent,
    ConfigAlmacenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
