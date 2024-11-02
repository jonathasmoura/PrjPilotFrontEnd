import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { ListAdvertisementsComponent } from './components/advertisements/list-advertisements/list-advertisements.component';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './components/products/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListProductsComponent,
    ListAdvertisementsComponent,
    ListCategoriesComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
