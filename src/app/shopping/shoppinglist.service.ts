import { Ingredient } from 'src/app/shared/ingredient.model';
import { EventEmitter, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";



export class ShoppingListService{
  // onIngredientChange:EventEmitter<Ingredient[]> = new EventEmitter()
  onIngredientChange = new Subject<Ingredient[]>()
  onEditChange = new Subject<Ingredient>()

  private ingredients :Ingredient[] = [
    new Ingredient(1 ,  "Apples" , 5),
    new Ingredient(2 ,"Tomatoes"  ,10)
  ];

  public getIngredients():Ingredient[]{
    return this.ingredients.slice()
  }

  public addIngredient(ingredient:Ingredient){
      console.log("in "+ingredient.amount)
      this.ingredients.push(ingredient);
      this.onIngredientChange.next(this.ingredients.slice()) //emit(this.ingredients.slice())
  }

  public updateIngredient(ingredient:Ingredient){
   const index = this.ingredients.findIndex(ing => ingredient.id === ing.id);
   console.log("idex "+index)
    this.ingredients[index] = ingredient
    this.onIngredientChange.next(this.ingredients.slice()) //emit(this.ingredients.slice())
}

public deleteIngredient(ingredient:Ingredient){
  const index = this.ingredients.findIndex(ing => ingredient.id === ing.id);
  console.log("idex "+index)
   this.ingredients.splice(index , 1)  // = ingredient
   this.onIngredientChange.next(this.ingredients.slice()) //emit(this.ingredients.slice())
}

  public getIngredient(index:number):Ingredient{
  return this.getIngredients()[index]
  }

  public addIngredients(ingredients:Ingredient[]){

    ingredients.forEach(ingredient => {
      this.ingredients.push(ingredient);
    });
    this.onIngredientChange.next(this.ingredients.slice())
}





}