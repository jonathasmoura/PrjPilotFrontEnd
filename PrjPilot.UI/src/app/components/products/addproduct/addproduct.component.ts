import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
formProduct: FormGroup;

constructor(private productService: ProductsService,private fb: FormBuilder, private router: Router) {
  this.formProduct = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    quantity: ['', Validators.required],
  });
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
}