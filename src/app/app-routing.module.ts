import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
import { ViewItemComponent } from './components/view-item/view-item.component';


const routes: Routes = [
  { path: 'Home', component: InicioComponent },
  { path: 'More/:id', component: ViewItemComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
