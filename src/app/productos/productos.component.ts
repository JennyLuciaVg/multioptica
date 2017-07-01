import { Component, OnInit } from '@angular/core';

import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html' ,
  styles: []
})
export class ProductosComponent implements OnInit {

  public products: any

  constructor(private productService: ProductosService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.products = data )
  }

}
