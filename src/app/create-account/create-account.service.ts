import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CreateAccountService {

	private baseUrl: string = 'https://powerful-dawn-52250.herokuapp.com/api/v1/users/';

  constructor(private http: Http) { }

  createAccount(first_name, last_name, phone, email, password){

  	let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
  	let body = JSON.stringify({email: email, password: password, first_name: first_name, last_name: last_name, phone: phone, is_joined: true});

  	return this.http.post(this.baseUrl, body)
  									.map((res: Response) => {

  										let token = res.json();

  										if( token )
  											return true;
  										else
  											return false;
  										
  									});
  }

}
