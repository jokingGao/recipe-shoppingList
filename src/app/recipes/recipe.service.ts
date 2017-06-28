
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe","This is simply a test",
    "https://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg",
    [
        new Ingredient('meat', 2),
        new Ingredient('Fries', 20)
    ]),
    new Recipe("Another Test Recipe","This is simply a test",
    "https://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg",
    [
        new Ingredient('meat', 2),
        new Ingredient('Fries', 20)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe() {
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}