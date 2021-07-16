
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard.service';
import { RecipeResolverService } from '../shared/recipe.resolver.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

 const  routes :Routes = [
        {path:"" , canActivate:[AuthGuard] , component:RecipesComponent  ,children:[
        {path:"" , component:RecipeStartComponent},
        {path:"new" , component:RecipeEditComponent},
        {path:":id" , component:RecipeDetailComponent , resolve:[RecipeResolverService]},
        {path:":id/new" , component:RecipeEditComponent},
    ]}
 ]

 @NgModule({
     declarations:[] , 
     imports:[RouterModule.forChild(routes)],
     exports:[RouterModule]
 })
export class RecipeRoutingModule{

}