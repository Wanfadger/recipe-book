import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaust, exhaustMap, filter, find, map, take } from "rxjs/operators";



@Injectable({providedIn:'root'})
export class DataStorageService{
    
     url:string = "https://firstdemo-63bc6-default-rtdb.firebaseio.com/recipes"

    constructor(private _httpClient:HttpClient , private _authService:AuthService){}
    
        getRecipes(){
         
            return this._httpClient.get<{[key:string]:Recipe}>(`${this.url}.json`) 
            .pipe(map( res =>{
              const recipes:Recipe[] = []
              for (const key in res) {
                if (res.hasOwnProperty(key)) {
                  recipes.push({...res[key] , id:key})
                }
              }
             return recipes
            } ))
        }



    
        getRecipe(id:String){
          return this.getRecipes().pipe(map(res => {
            const re:Recipe = res.find(r => r.id === id) as Recipe
            return re
          })) //this._httpClient.get<Recipe>(`${this.url}/${id}.json`)
        }
    
        updateRecipe(id:string , recipe:Recipe){
          this._httpClient.put<Recipe>(`${this.url}/${id}.json` , recipe)
        }
    
        deleteRecipe(id:string){
          this._httpClient.delete(`${this.url}/${id}.json`)
        }

        saveRecipe(recipe:Recipe){
          return  this._httpClient.post(`${this.url}.json` , recipe)
        }

}