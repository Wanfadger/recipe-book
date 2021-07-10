import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
 private   recipes : Recipe[] = [
    new Recipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
      new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ]),
        new Recipe("Test Recipe" , "This is A test recipe" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwTPQImajlKz678fBeLji9MomX-F0Y2wu6Q&usqp=CAU" , 
        [new Ingredient("iuwiuwhs" , 2)]
        ),

    new Recipe("name" , "desscription" , "https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg" , [new Ingredient("iuwiuwhs" , 2)]),
  
   ]

    getRecipes():Recipe[]{
        return this.recipes.slice()
    }
}