import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Bibimbap',
      'Bibimbap literally means "mixed rice", and is served as a bowl of warm white rice topped with namul (sautéed and seasoned vegetables) and gochujang (chili pepper paste), soy sauce, or doenjang (a fermented soybean paste). A raw or fried egg and sliced meat (usually beef) are common additions. The hot dish is stirred together thoroughly just before eating.',
      'http://johnwest.com.au/-/media/images/recipes/t/tuna-bibimbap/tunabibimbap2905sjpg.ashx?mw=500&mh=500'),
    new Recipe(
      'Kimchi',
      'Kimchi, a staple in Korean cuisine, is a traditional side dish made from salted and fermented vegetables, most commonly napa cabbage and Korean radishes, with a variety of seasonings including chili powder, scallions, garlic, ginger, and jeotgal (salted seafood). There are hundreds of varieties of kimchi made with different vegetables as the main ingredients',
      'http://recipes.timesofindia.com/photo/55178711.cms'),
    new Recipe(
      'Japchae',
      'Japchae is made from sweet potato noodles (called dangmyeon), stir fried in sesame oil with vegetables (typically thinly sliced carrots, onion, spinach, and mushrooms), sometimes served with beef, and flavoured with soy sauce, and sweetened with sugar. It is usually served garnished with sesame seeds and slivers of chili. It may be served hot or cold.',
      'https://s-media-cache-ak0.pinimg.com/originals/55/29/28/55292852b92f0504d17dd96c965c46eb.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
