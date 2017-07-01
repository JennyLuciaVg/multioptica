import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
//import { AuthGuard }              from './auth.guard';

import { PanelComponent } from './panel/panel.component'

import { LoginComponent }         from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';

import { NovedadesComponent }     from './novedades/novedades.component';
import { ProductosComponent }     from './productos/productos.component';
import { PromocionesComponent }   from './promociones/promociones.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'sign_up',
        component: CreateAccountComponent,
      },
      {
        path: 'dashboard',
        component: PanelComponent,
        children:[
          { path: '', component: ProductosComponent/*, canActivate: [AuthGuard]*/ },
          { path: 'productos', component: ProductosComponent/*, canActivate: [AuthGuard]*/ },
          { path: 'promociones', component: PromocionesComponent/*, canActivate: [AuthGuard]*/ },
          { path: 'novedades', component: NovedadesComponent/*, canActivate: [AuthGuard]*/ }
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
