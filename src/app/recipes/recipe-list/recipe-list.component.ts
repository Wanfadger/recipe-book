import { DataStorageService } from './../../shared/data.storage.service';
import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes !:  Recipe[]


  constructor(private _recipeService:RecipeService , private _router:Router , private _route:ActivatedRoute , private _dataService:DataStorageService) { 
   
  }

  ngOnInit(): void {
    this.getRecipes()
  }

  onNewRecipe(){
    this._router.navigate(["new"] , {relativeTo:this._route})
  }

  getRecipes(){
    this._dataService.getRecipes().subscribe(response =>{
        this.recipes = response
    })
  }


}
