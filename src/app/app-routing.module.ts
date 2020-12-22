import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {AboutComponent} from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,pathMatch: 'full' },
  { path: 'detail/:id',component:DetailComponent},
  {path:'about',component:AboutComponent},
  { path: 'product/:brand', component: ProductComponent, children:[
  { path: 'detail/:id',component:DetailComponent}
  ] },
  { path: "",redirectTo:"/home" , pathMatch:'full'},
  {path:"login",component:LoginComponent},
  { path: 'filter/:value', component: ProductComponent},
  {path: 'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
