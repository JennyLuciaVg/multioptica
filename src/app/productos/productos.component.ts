import { Component, OnInit } from '@angular/core';

import { ProductosService } from './productos.service';
import { CategoriasService } from './categorias/categorias.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html' ,
  styles: []
})
export class ProductosComponent implements OnInit {

  public products: any
  public categories: any;

  public selectedCategory: string;
  public minValue: string;
  public maxValue: string;

  constructor(private productService: ProductosService, private categoryService: CategoriasService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.products = data )
    this.categoryService.getCategories().subscribe(data => this.categories = data)
  }

  onChange(){
  	this.productService.filterProducts(this.selectedCategory, this.minValue, this.maxValue)
  		.subscribe(data => this.products = data);
  }

}