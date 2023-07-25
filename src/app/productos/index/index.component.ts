import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../productos.service';
import { Productos } from '../productos';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  productos: Productos[] = [];

  // constructor() { }
  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
  }
  getProductos(): void {
    this.productosService.getAll().subscribe((data: Productos[])=>{
      this.productos = data;
      console.log('Datos recibidos:', data);
    this.productos = data;
    console.log('Productos:', this.productos);
      console.log('Products:', this.productos);
      this.productos.forEach(producto => {
        console.log('Id: lkkkk', producto?.id);
        console.log('Referencia:', producto?.referencia);
        console.log('Stock:', producto?.stock);
      });
      let productos =this.productos;
      for (let i = 0; i < productos.length; i++) {
        console.log(productos[i]);
    }

    });
  }

  deleteProducto(id:number){
    this.productosService.delete_product(id).subscribe(res => {
      this.productos = this.productos.filter(item => item.id !== id);
      console.log('Product deleted successfully!');
      window.location.reload();
    });
  }
}
