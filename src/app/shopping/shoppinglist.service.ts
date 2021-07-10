import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService{
  onIngredientChange:EventEmitter<Ingredient[]> = new EventEmitter()

  private ingredients :Ingredient[] = [
    new Ingredient("Apples" , 5),
    new Ingredient("Tomatoes"  ,10)
  ];

  public getIngredients():Ingredient[]{
    return this.ingredients.slice()
  }

  public addIngredient(ingredient:Ingredient){
      console.log("in "+ingredient.amount)
      this.ingredients.push(ingredient);
      this.onIngredientChange.emit(this.ingredients.slice())
  }

  public addIngredients(ingredients:Ingredient[]){

    ingredients.forEach(ingredient => {
      this.ingredients.push(ingredient);
    });
    this.onIngredientChange.emit(this.ingredients.slice())
}


}