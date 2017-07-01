import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

  private baseUrl: string = 'https://powerful-dawn-52250.herokuapp.com/api/v1/products/';

  constructor() { }

}
