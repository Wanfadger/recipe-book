
import { NgModule } from '@angular/core';
import {  PreloadAllModules, Route, RouterModule } from '@angular/router';


const routes:Route[] = [
    {path:"" , redirectTo:"/auth" , pathMatch:"full"}, 
    {path:"auth" , loadChildren: () => import("./auth/auth.module").then(m=> m.AuthModule)} ,
    {path:"recipes" , loadChildren: () => import('./recipes/recipe.module').then(m => m.RecipeModule)}, 
    {path:"shoppingList" , loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule)}, 
]

@NgModule({
    imports:[RouterModule.forRoot(routes , {preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRouteModule{

}