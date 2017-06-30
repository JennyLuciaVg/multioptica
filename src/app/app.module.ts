import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    PromocionesComponent,
    NovedadesComponent,
    LoginComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
