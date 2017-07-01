import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';
import { RouterModule }     from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

/* AUTHENTIFICATION */
import { AuthGuard } from './auth.guard';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PanelComponent } from './panel/panel.component';

/* SERVICES */
import { ProductosService } from './productos/productos.service';

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
    RouterModule
  ],
  providers: [
    AuthGuard, 
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
