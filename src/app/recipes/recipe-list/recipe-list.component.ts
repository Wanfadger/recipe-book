import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers:[RecipeService]
})
export class RecipeListComponent implements OnInit {
  recipes !:  Recipe[]
  @Output() selectedRecipeEvent:EventEmitter<Recipe> = new EventEmitter();

  constructor(private _recipeService:RecipeService) { 
   
  }

  ngOnInit(): void {
    this.recipes = this._recipeService.getRecipes()
  }


  onSelectedRecipe(recipe:Recipe){
   this.selectedRecipeEvent.emit(recipe)
  }

}
