import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  formCategory: FormGroup;

  constructor(private categoryService: CategoriesService, private fb: FormBuilder) {
    this.formCategory = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }
  
  ngOnInit(): void {
    this.refreshCategory();
  }

refreshCategory(){
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

  onSubmit() {
    
      console.log('Form submitted:', this.formCategory.value);
   this.categoryService.addCategory(this.formCategory.value).subscribe(data => {
    console.log(data);
    this.formCategory.reset();
    this.refreshCategory();
   })
  }



}
