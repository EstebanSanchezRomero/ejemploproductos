import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarProductosComponent} from './registrar-productos/registrar-productos.component';
import { RegistrarUsuariosComponent} from './registrar-usuarios/registrar-usuarios.component';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { ListausuariosComponent } from './listausuarios/listausuarios.component';

const routes: Routes = [
  {path:'registrarproducto', component:RegistrarProductosComponent },
  {path:'registrarusuairos', component:RegistrarUsuariosComponent },
  {path:'listaproductos', component:ListaproductosComponent},
  {path:'listausuarios', component:ListausuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
