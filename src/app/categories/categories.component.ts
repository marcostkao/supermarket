import { Component, OnInit } from '@angular/core';
import { Categories } from './categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Categories[] = [
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

  ngOnInit(): void {
  }

}
