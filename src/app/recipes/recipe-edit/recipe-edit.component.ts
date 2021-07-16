import { DataStorageService } from './../../shared/data.storage.service';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  name !:String
  editMode = false;
  id !:number

  ingArray : FormArray = new FormArray([])
  recipeForm !: FormGroup


  constructor(private _activatedRoute:ActivatedRoute , private _router:Router ,  
    private _recipeService:RecipeService , private _dataService:DataStorageService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.name = params["name"]
      this.editMode = params["name"] != null
      this.initForm()
      console.log(this.editMode)
    })
  }


  onSubmit(){
     if(this.editMode){
      let recipe:Recipe = this.recipeForm.value as Recipe
      recipe.id = this.id
       this._recipeService.updateRecipe(recipe)
       this._router.navigate(["../../"] , {relativeTo:this._activatedRoute})
     }else{
       console.log(this.recipeForm)
      let recipe:Recipe = this.recipeForm.value as Recipe
      (<FormArray>this.recipeForm.get("ingredients")).controls.forEach(element => recipe.ingredients.push(element.value));

      this._dataService.saveRecipe(recipe).subscribe(res => {
        console.log(recipe)
        this._router.navigate(["../../"] , {relativeTo:this._activatedRoute})
      })

  
      this.editMode = false
     }
  }

  initForm(){

    if(!this.editMode){
      this.recipeForm  = new FormGroup({
        "name": new FormControl(null  , Validators.required),
       "imageUrl": new FormControl(null , Validators.required),
       "description": new FormControl(null , Validators.required),
       "ingredients": this.ingArray
  })
    }else{
      const recipe:Recipe = this._recipeService.getRecipe(this.name)
      if(recipe.ingredients){
        recipe.ingredients.forEach(ing => this.ingArray.push(
          new FormGroup({
            "name": new FormControl(ing.name , Validators.required),
            "amount": new FormControl(ing.amount , [Validators.required , 
             Validators.pattern(/^[1-9]+[0-9]*$/)]
             )
          })
        ))
      }

      this.recipeForm = new FormGroup({
        "name": new FormControl(recipe.name  , Validators.required),
        "imageUrl": new FormControl(recipe.imageUrl , Validators.required),
        "description": new FormControl(recipe.description , Validators.required),
        "ingredients": this.ingArray
      })
    }
  }

  getFormArrayControls(){
    return (<FormArray>this.recipeForm.get("ingredients")).controls
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get("ingredients")).controls.push(
      new FormGroup({
        "name": new FormControl(null , Validators.required),
        "amount": new FormControl(null , [Validators.required  ,
         Validators.pattern(/^[1-9]+[0-9]*$/)]
         )
      })
    )
  }

  deleteIngredient(index:number){
  this.ingArray.removeAt(index)
  }

 

}
