import {Component} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Chili powder', 5),
    new Ingredient('Sesame seeds', 2),
    new Ingredient('Black pepper', 8)
  ];

  onClickedItem(itemData: {name: string, amount: number}) {
    console.log(`
      ${itemData.name} (${itemData.amount})
    `);
  }

  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
