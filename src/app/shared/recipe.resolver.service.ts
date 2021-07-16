import { Recipe } from './../recipes/recipe.model';
import { DataStorageService } from './data.storage.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({providedIn:"root"})
export class RecipeResolverService implements Resolve<Recipe>{
  
    constructor(private _dataService:DataStorageService){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
        return this._dataService.getRecipe(String(route.paramMap.get('id')));
        }
}