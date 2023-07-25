import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [

  { path: '', redirectTo: 'productos/index', pathMatch: 'full'},
  { path: 'productos/index', component: IndexComponent },
  { path: 'productos/create', component: CreateComponent },
  { path: 'productos/edit/:idProducto', component: EditComponent } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
