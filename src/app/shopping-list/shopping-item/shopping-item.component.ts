import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {
  @Input() shoppingItem: {
    name: string,
    amount: number
  };

  @Output() itemClickEvent = new EventEmitter<{
    name: string,
    amount: number
  }>();

  onItemClick() {
    this.itemClickEvent.emit({
      name: this.shoppingItem.name,
      amount: this.shoppingItem.amount
    });
  }

  constructor() { }
}
