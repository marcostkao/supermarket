import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from './../categories/category';
import { CategoriesService } from './../categories/categories.service';
import { Item } from './item/item.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  category: Category;

  items: Observable<Item[]>

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoriesService
      .categoryById(this.route.snapshot.params['id'])
      .subscribe((category) => (this.category = category));

   this.items = this.categoriesService.itemOfCategories(this.route.parent.snapshot.params['id'])
  }

  addItem(item: Item){
    console.log(item);
  }
}
