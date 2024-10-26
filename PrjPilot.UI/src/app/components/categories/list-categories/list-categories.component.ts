import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit{
  
  categories: Category[] = [];
  /**
   *
   */
  constructor(private categoryService: CategoriesService) {}
  
  ngOnInit(): void {
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
