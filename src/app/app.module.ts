import { AlertComponent } from './shared/alert/alert.component';
import { LOadingSpinner } from './shared/loading-spinner/loading-spinner.component';
import { AuthComponent } from './auth/auth.component';
import { RecipeService } from './recipes/recipe.service';
import { AppRouteModule } from './app.route.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping/shopping-item/shopping-item.component';
import { CreateItemComponent } from './shopping/create-item/create-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DroppdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping/shoppinglist.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from './auth/auth-inteceptor.service';
import { AuthGuard } from './auth/auth.guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    CreateItemComponent,
    DroppdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LOadingSpinner,
    AlertComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService , RecipeService , 
    AuthGuard,
    {provide:HTTP_INTERCEPTORS , useClass:AuthInterceptorService , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
