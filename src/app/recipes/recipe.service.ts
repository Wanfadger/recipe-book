import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping/shoppinglist.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  
  constructor(private _shppingService:ShoppingListService){}

 private   recipes : Recipe[] = [
    new Recipe(1,
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
          new Ingredient(++this._shppingService.getIngredients().length ,'Meat', 1),
          new Ingredient(++this._shppingService.getIngredients().length ,'French Fries', 20)
        ]),
      new Recipe(2, 'Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
          new Ingredient(++this._shppingService.getIngredients().length ,'Buns', 2),
          new Ingredient(++this._shppingService.getIngredients().length ,'Meat', 1)
        ]),
        new Recipe(3, "Test Recipe" , "This is A test recipe" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwTPQImajlKz678fBeLji9MomX-F0Y2wu6Q&usqp=CAU" , 
        [new Ingredient(++this._shppingService.getIngredients().length ,"iuwiuwhs" , 2)]
        ),

    new Recipe(4, "name" , "desscription" , "https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg" ,
     [new Ingredient(++this._shppingService.getIngredients().length ,"iuwiuwhs" , 2)]),
  
   ]

    getRecipes():Recipe[]{
        return this.recipes.slice()
    }

    getRecipe(name:String):Recipe{
      const r =  this.recipes.find(recipe => recipe.name === name) as Recipe
      console.log("Recipe "+r.description)
      return r
    }

    updateRecipe(recipe:Recipe){
      const index = this.recipes.findIndex(r => r.id === recipe.id);
      this.getRecipes()[index] = recipe
    }

    deleteRecipe(recipe:Recipe){
      const index = this.recipes.findIndex(r => r.id === recipe.id);
      this.getRecipes().slice(index , 1)
    }


}