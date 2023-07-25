import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public productosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
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

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.productosService.create_product(this.form.value).subscribe((res) => {
        console.log('Producto created successfully!');
        this.router.navigateByUrl('productos/index');
      });
    }
  }

  hasError(controlName: string, errorName: string) {
    return this.form.get(controlName)?.hasError(errorName);
  }
}


//

