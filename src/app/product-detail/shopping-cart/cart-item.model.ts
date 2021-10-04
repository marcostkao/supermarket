import { Item } from '../item/item.model';

export class CartItem {
  constructor(public item: Item, public quantity: number = 1) {}

  value(): number {
    return this.item.price * this.quantity;
  }
}
