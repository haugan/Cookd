import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input('recipeItem') item: {
    name: string,
    description: string,
    imgURL: string
  };

  constructor() {
    console.log('RecipeItem constructor called');
  }

}
