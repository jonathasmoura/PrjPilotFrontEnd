import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
formProduct: FormGroup;
categories: Category[] = [];

constructor(private productService: ProductsService, private categoryService: CategoriesService,private fb: FormBuilder, private router: Router) {
  this.formProduct = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    quantity: ['', Validators.required],
    categoryId:['',]
  });
}
  ngOnInit(): void {
    this.getCategories();
  }

submitForm() {
    if (this.formProduct.valid) {
      console.log('Form submitted:', this.formProduct.value);
      this.productService.addProduct(this.formProduct.value).subscribe({
       next:(data) =>{
        console.log(data);
        this.formProduct.reset();
        this.productService.getAllProducts();
        this.router.navigate(['/produtos']);
       }
      });
    }
  };

  listProducts(){
    this.router.navigate(['/produtos']);
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe({
      next:(categories) => {
        console.log(categories);
        this.categories = categories;
      },
      error:(resp) => {
        console.log(resp);
      }
    })
  }
}