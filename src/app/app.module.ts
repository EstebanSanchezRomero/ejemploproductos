import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos.component';
import { RegistrarUsuariosComponent } from './registrar-usuarios/registrar-usuarios.component';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { ListausuariosComponent } from './listausuarios/listausuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarProductosComponent,
    RegistrarUsuariosComponent,
    ListaproductosComponent,
    ListausuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
