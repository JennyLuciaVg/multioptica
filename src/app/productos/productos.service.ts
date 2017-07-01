import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductosService {

  private baseUrl: string = 'https://powerful-dawn-52250.herokuapp.com/api/v1/products/';
  public products: Object = [];

  constructor(private http: Http) { }

  getProducts(){
    return this.http.get(this.baseUrl).map(res => res.json().results)
  }

  getProduct(){

  }  

  updateProduct(){

  }

}
