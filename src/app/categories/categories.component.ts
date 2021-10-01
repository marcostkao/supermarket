import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Category } from './category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[]

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.categories()
  }

}
