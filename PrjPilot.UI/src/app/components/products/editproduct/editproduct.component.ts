import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit{
  formEditProduct: FormGroup;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private productService: ProductsService, private router: Router) {

      this.formEditProduct = this.fb.group({
        id:[],
        name:[],
        description:[],
        price:[],
        quantity:[]
      })
    }
  ngOnInit(): void {
      this.route.paramMap.subscribe({
      next:(params) => {
        const idP = params.get('id');

        if(idP){
            this.getProductById(Number(idP));
          }
      }
    })
  }


  getProductById(id: number){

    this.productService.getProductById(id).subscribe((product: Product)=> this.editProduct(product),
  (err: any) => console.log(err)
    );}

    editProduct(product: Product){
      this.formEditProduct.patchValue({
        id:product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity
      });
    }

    submitFormEdit(){
      if (this.formEditProduct.valid) {
        console.log('Form submitted:', this.formEditProduct.value);
        this.productService.updateProduct(this.formEditProduct.value).subscribe({
         next:(data) =>{
          console.log(data);
          this.formEditProduct.reset();
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
