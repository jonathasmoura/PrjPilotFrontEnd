import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

   baseUrl = 'https://localhost:44351/Category/';
  constructor(private http: HttpClient) { 
    
  }



getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl + 'categories');
}

addCategory(categry: Category): Observable<any>{
return this.http.post(this.baseUrl + 'addcategory', categry);
}





}
