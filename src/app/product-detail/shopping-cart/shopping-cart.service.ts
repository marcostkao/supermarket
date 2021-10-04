import { Injectable } from '@angular/core';
import { Item } from '../item/item.model';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  items: CartItem[] = []

  clear() {
    this.items = [];
  }

  addItem(item: Item) {
    let foundItem = this.items.find((mItem) => mItem.item.id == item.id);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items
      .map((item) => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
