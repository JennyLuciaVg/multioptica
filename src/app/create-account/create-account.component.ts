import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreateAccountService } from './create-account.service';

declare var Culqi: any;

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styles: []
})
export class CreateAccountComponent implements OnInit {

  private externalUrl: string = 'https://powerful-dawn-52250.herokuapp.com/admin/login/?next=/admin/';

  constructor(private router: Router, private createAccount: CreateAccountService) { }

  ngOnInit() {
    this.culqiIntegration();
  }

  registerAccount($event, first_name, last_name, phone, email, password) {
    $event.preventDefault();

  	this.createAccount.createAccount(first_name, last_name, phone, email, password).subscribe( res => {
  		//this.router.navigate(['dashboard']);
      window.location.href = this.externalUrl;
  	})
  }

  culqiIntegration() {
    Culqi.publicKey = 'pk_test_jaYR4PZ3Ka9NQld8';

    Culqi.settings({
      title: 'Metodo de Pago',
      currency: 'PEN',
      description: '',
      amount: ''
    });
  }

  payWithCulqi() {
    // Abre el formulario con las opciones de Culqi.settings
    Culqi.open();

    if (Culqi.token) { // Token creado exitosamente!
      // Obtener el token ID
      var token = Culqi.token.id;
      //aqui es donde debes enviar el token a culqui supongo que es un ajax
      // sino puede enviarlo asi nomas lo dejas como floro
      //creo quees algo asiii
      var token = Culqi.token.id;
      var email = Culqi.email;

      this.createAccount.requestCulqiResponse(token).subscribe( res => { true } );

    } else { // Hubo algun problema!
      // Mostramos JSON de objeto error en consola
      console.log(Culqi.error);
    }
  }

}