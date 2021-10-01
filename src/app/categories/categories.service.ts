import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categ: Category[] = [
    {
      id: "frutas",
      name: "Maça",
      imagePath: "assets/img/categories/maca.png"
    },
    {
      id: "frutas",
      name: "Banana",
      imagePath: "assets/img/categories/banana.png"
    }
  ]

  constructor() { }

  categories(): Category[] {
    return this.categ;
  }
}
