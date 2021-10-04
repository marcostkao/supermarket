import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from './item.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() add = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitAddEvent() {
    this.add.emit(this.item);
  }
}
