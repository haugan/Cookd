import {Component} from '@angular/core';
import {Recipe} from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedNav = 'recipes';
  selectedRecipe: Recipe;

  onNavSelected(currentSelection: string) {
    this.selectedNav = currentSelection;
  }

  onRecipeItemClicked(recipeItem: Recipe) {
    this.selectedRecipe = recipeItem;
    console.log(recipeItem.name)
  }
}
