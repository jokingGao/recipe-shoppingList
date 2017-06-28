
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter

  recipes: Recipe[] = [
    new Recipe("A Test Recipe","This is simply a test",
    "https://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg"),
    new Recipe("Another Test Recipe","This is simply a test",
    "https://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg")
  ];


  getRecipe() {
      return this.recipes.slice();
  }
}