import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {
  @Input('shoppingItem') item: {
    name: string,
    amount: number
  };

  @Output() itemClicked = new EventEmitter<{
    name: string,
    amount: number
  }>();

  onItemClick() { // TODO: inform ShoppingList of triggered event (and pass some data) ..
    this.itemClicked.emit({
      name: this.item.name,
      amount: this.item.amount
    });
  }
}
