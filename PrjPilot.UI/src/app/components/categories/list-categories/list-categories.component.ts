import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
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
  formCategory!: FormGroup;
  nameAddOrEdit!: string;
  showAdd!:boolean;
  showUpdate!:boolean;
  id!: number;


  constructor( private route: ActivatedRoute,private categoryService: CategoriesService, private fb: FormBuilder, private router: Router) {
    
  }
  
  ngOnInit(): void {

    this.formCategory = this.fb.group({     
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.refreshCategory();
  }

  clickAddCategory(){
    this.showAdd = true;
    this.showUpdate = false;
    this.nameAddOrEdit = 'Incluir Categoria';
    this.formCategory.reset();
  }

  clickEditCategory(c: Category){
    debugger
    this.nameAddOrEdit = 'Editar Categoria';
    this.showAdd = false;
    this.showUpdate = true;
    this.id = c.id;
    
        this.formCategory.patchValue({
        id:c.id,
        name: c.name,
        description: c.description
       });
  };

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

postCategory(){
  this.categoryService.addCategory(this.formCategory.value).subscribe({
    next:(data) => {
      console.log(data);
      this.formCategory.reset();
      this.router.navigateByUrl('/categorias');
      this.refreshCategory();
    }
  });
};


 

  getCategoryById(id: number){
    this.categoryService.getCategoryById(id).subscribe((category: Category)=> this.clickEditCategory(category),
      (err: any) => console.log(err)
  )};


  onUpdate(){
    debugger
    this.formCategory.value.id = this.id;
       this.categoryService.updateCategory(this.formCategory.value).subscribe({
      next:(data)=>{
        this.formCategory.reset();
        this.router.navigateByUrl('/categorias');
        this.refreshCategory();
        }
     })
    
  }
}
