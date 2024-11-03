import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { AddproductComponent } from './components/products/addproduct/addproduct.component';

const routes: Routes = [
  {
    path:'login', 
    component:LoginComponent
  },
  {
    path:'register',
     component:RegisterComponent
    },
    {
      path:'produtos',
      component:ListProductsComponent
    },
    {
      path:'categorias',
      component:ListCategoriesComponent
    },
    {
      path:'incluir-produto',
      component:AddproductComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
