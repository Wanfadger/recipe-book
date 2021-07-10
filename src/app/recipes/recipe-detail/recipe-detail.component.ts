import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping/shoppinglist.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe !: Recipe

  constructor(private _shoppinListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(){
    this._shoppinListService.addIngredients(this.recipe.ingredients)
  }

  editIngredient(){

  }

  deleteIngredient(){

  }


}
