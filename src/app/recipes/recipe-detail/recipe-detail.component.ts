import { DataStorageService } from './../../shared/data.storage.service';
import { RecipeService } from './../recipe.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping/shoppinglist.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  
})
export class RecipeDetailComponent implements OnInit {

   recipe !: Recipe
   options:string[] = ["add to shopping list" , "edit" , "delete"]
   @ViewChild("selectedOption") selectForm !: ElementRef
   isLoading = true;


  constructor(
    private _dateService:DataStorageService,
    private _router:Router,
    private _activatedRouter:ActivatedRoute ,
    ) { }

  ngOnInit(): void {
    const name = this._activatedRouter.snapshot.params["id"]
   this._activatedRouter.params.subscribe( params => {
   this.getRecipe(params["id"])
    console.log("Recipe "+this.recipe)
    })
  }

  getRecipe(id:String){
    this._dateService.getRecipe(id).subscribe(res => {
      this.isLoading = false
      this.recipe = res})
  }

  addIngredient(){
   // this._shoppinListService.addIngredients(this.recipe.ingredients)
  }

  deleteIngredient(){
     alert("delete")
  }

  onOptionSelected(){
    const index = this.selectForm.nativeElement.value
    if(index == 0){
     
     }else if(index == 1){
      this._router.navigate(["new"] , {relativeTo:this._activatedRouter})
     } else{
      alert(this.recipe.id)
     // this._recipeService.deleteRecipe(this.recipe)
      this._router.navigate(["../"] , {relativeTo:this._activatedRouter})
    }
  }


}
