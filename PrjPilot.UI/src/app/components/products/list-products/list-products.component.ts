import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  
products: Product[]=[];
//[{id:'1', name:'Bermuda Tommy Hil',description:'Bermuda Jeans',price:159.99,quantity:100 },{id:'2', name:'Jaqueta Corta Vento',description:'Jaqueta Tacktel',price:129.99,quantity:100 },{id:'3', name:'Camiseta Lacospe',description:'Camiseta Pólo',price:199.99,quantity:10 }];

constructor(private productService: ProductsService, private router: Router) {
  
}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    debugger
    this.productService.getAllProducts().subscribe({
      next:(products) => {
        console.log(products);
        this.products = products;
      },
      error:(resp) => {
        console.log(resp);
      }
    })
  } 

  editProduct(productId: number){
    this.router.navigate(['/editar-produto', productId]);
  }
}
