import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreateAccountService } from './create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styles: []
})
export class CreateAccountComponent implements OnInit {

  private externalUrl: string = 'https://powerful-dawn-52250.herokuapp.com/admin/login/?next=/admin/';

  constructor(private router: Router, private createAccount: CreateAccountService) { }

  ngOnInit() {}

  registerAccount($event, first_name, last_name, phone, email, password) {
    $event.preventDefault();

  	this.createAccount.createAccount(first_name, last_name, phone, email, password).subscribe( res => {
  		//this.router.navigate(['dashboard']);
      window.location.href = this.externalUrl;
  	})
  }

}
