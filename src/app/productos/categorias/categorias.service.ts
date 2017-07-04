import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CategoriasService {

  private baseUrl: string = 'https://powerful-dawn-52250.herokuapp.com/api/v1/categories/';
  public categories: Object = [];

  constructor(private http: Http) { }

  getCategories(){
    return this.http.get(this.baseUrl).map(res => res.json())
  }

}
