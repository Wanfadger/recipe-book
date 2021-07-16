import { AuthComponent } from './auth/auth.component';
import { RecipeResolverService } from './shared/recipe.resolver.service';
import { CreateItemComponent } from './shopping/create-item/create-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { NgModule } from '@angular/core';
import {  Route, RouterModule, Routes } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AuthGuard } from './auth/auth.guard.service';


const routes:Route[] = [
    {path:"" , redirectTo:"/auth" , pathMatch:"full"},
    {path:"recipes" , canActivate:[AuthGuard] , component:RecipesComponent  ,children:[
        {path:"" , component:RecipeStartComponent},
        {path:"new" , component:RecipeEditComponent},
        {path:":id" , component:RecipeDetailComponent , resolve:[RecipeResolverService]},
        {path:":id/new" , component:RecipeEditComponent},
    ]},
    {path:"shoppingList" , component:ShoppingListComponent},
    {path:"auth" , component:AuthComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouteModule{

}