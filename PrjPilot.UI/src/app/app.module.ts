import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './components/products/addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from './components/products/editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListProductsComponent,
    ListCategoriesComponent,
    AddproductComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
