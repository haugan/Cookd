import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @Input() shoppingItem: {
    name: string,
    amount: number
  };

  constructor() { }

  ngOnInit() {
  }

}
