import { Component, OnInit } from '@angular/core';
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

constructor(private productService: ProductsService) {
  
}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
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
}
