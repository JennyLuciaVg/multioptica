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

  filterProducts(categories, min_price, max_price){

    let urlFilter = this.baseUrl;

    // WARM: Remove this line when backend fix category with id 8.
    if( categories != 8 ){

      if( categories != undefined )
        urlFilter += '?category=' + categories;

      if( min_price != undefined )
        if( urlFilter.indexOf('?') < 0 )
          urlFilter += '?min_price=' + min_price;
        else
          urlFilter += '&min_price=' + min_price;

      if( max_price != undefined )
        if( urlFilter.indexOf('?') < 0 )
          urlFilter += '?max_price=' + max_price;
        else
          urlFilter += '&max_price=' + max_price;
    }

    return this.http.get(urlFilter).map(res => res.json().results)

  }  

  updateProduct(){

  }

}