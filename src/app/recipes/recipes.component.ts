import { Component, OnInit } from '@angular/core';
import { __read } from 'tslib';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe !: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe:any){
    this.selectedRecipe = recipe as Recipe
  }

}
