import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreateAccountService } from './create-account.service'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styles: []
})
export class CreateAccountComponent implements OnInit {

  constructor(private router: Router, private createAccount: CreateAccountService) { }

  ngOnInit() {}

  registerAccount(email, password) {
  	this.createAccount.createAccount(email, password).subscribe( res => {
  		this.router.navigate(['dashboard']);
  	})
  }

}
