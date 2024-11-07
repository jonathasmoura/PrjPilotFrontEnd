import { HttpClient } from '@angular/common/http';
import { Injectable, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'https://localhost:44351/Product/';
  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl +'products');    
  }

  getProductById(id: number):Observable<Product>{
    return this.http.get<Product>(this.baseUrl + 'getby/' + id);
  }

  addProduct(product: Product):Observable<any>{
    return this.http.post(this.baseUrl + 'addproduct', product);
  }

  updateProduct(product: Product):Observable<any>{
    return this.http.put<Product>(this.baseUrl + 'edit/' + product.id, product);
  }

}
