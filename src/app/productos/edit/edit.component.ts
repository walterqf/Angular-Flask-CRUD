import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Productos } from '../productos';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number=0;
  productos: Productos | undefined;
  form!: FormGroup;

  constructor(
    public productosService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    
    this.id = this.route.snapshot.params['id'];
    this.productosService.get_product(this.id).subscribe((data: Productos)=>{
      this.productos = data;
      this.initForm(); 
    });

    this.form = new FormGroup({
      referencia: new FormControl('', [
        Validators.required,
        Validators.pattern('.*'),
      ]),
      parent_id: new FormControl('', [Validators.required,
        Validators.pattern('.*')]),
      stock: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      nivel: new FormControl('', [Validators.required,
        Validators.pattern('.*')]),
    });

  }

  initForm() {
    // Verifica si this.productos contiene datos válidos
    if (this.productos) {
      // Usa el método patchValue del formulario para establecer los valores de los controles
      this.form.patchValue({
        nivel: this.productos.nivel,         // Establece el valor del control nivel con this.productos.nivel
        referencia: this.productos.referencia,   // Establece el valor del control referencia con this.productos.referencia
        parent_id: this.productos.parent_id,     // Establece el valor del control parent_id con this.productos.parent_id
        stock: this.productos.stock,         // Establece el valor del control stock con this.productos.stock
      });
    }
  }
  


  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.productosService.update_product(this.id, this.form.value).subscribe(res => {
         console.log('Product updated successfully!');
         this.router.navigateByUrl('productos/index');
    })
  }
  hasError(controlName: string, errorName: string) {
    return this.form.get(controlName)?.hasError(errorName);
  }
}
