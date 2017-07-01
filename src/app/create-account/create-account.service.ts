import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CreateAccountService {

	private baseUrl: string = 'https://powerful-dawn-52250.herokuapp.com/api/v1/users/';

  constructor(private http: Http) { }

  createAccount(first_name, last_name, phone, email, password){

  	//let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
  	let body = { email: email, password: password, first_name: first_name, last_name: last_name, celphone: phone, is_joined: true };

  	return this.http.post(this.baseUrl, body)
  									.map((res: Response) => { return true; });
  }

}
