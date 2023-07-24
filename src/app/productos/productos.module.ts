import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Se importa ReactiveFormsModule y FormsModule

@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule, // Se añade ReactiveFormsModule aquí
    FormsModule // También se añade FormsModule, si vas a utilizar formularios basados en plantillas
  ]
})
export class ProductosModule { }
