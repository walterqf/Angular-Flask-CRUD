import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './productos/index/index.component';
import { CreateComponent } from './productos/create/create.component';
import { EditComponent } from './productos/edit/edit.component';
const routes: Routes = [
  { path: '', redirectTo: 'productos/index', pathMatch: 'full'},
  { path: 'productos/index', component: IndexComponent },
  { path: 'productos/create', component: CreateComponent },
  { path: 'productos/edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
