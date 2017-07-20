import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input('recipeInput') recipe: Recipe;
  @Output() recipeSelectedEmitter = new EventEmitter<void>();

  onRecipeSelected() {
    this.recipeSelectedEmitter.emit();
  }
}
