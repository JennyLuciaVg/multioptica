import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }       from '@angular/http';
import { RouterModule }     from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './auth.guard'

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PanelComponent } from './panel/panel.component';

/* SERVICES */
import { ProductosService } from './productos/productos.service';
import { CreateAccountService } from './create-account/create-account.service'
import { CategoriasService } from './productos/categorias/categorias.service'


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    PromocionesComponent,
    NovedadesComponent,
    LoginComponent,
    CreateAccountComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AuthGuard, 
    ProductosService,
    CreateAccountService,
    CategoriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
