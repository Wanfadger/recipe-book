import { ShoppingModule } from './shopping/shopping.module';
import { RecipeModule } from './recipes/recipe.module';
import { RecipeService } from './recipes/recipe.service';
import { AppRouteModule } from './app.route.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DroppdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping/shoppinglist.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from './auth/auth-inteceptor.service';
import { AuthGuard } from './auth/auth.guard.service';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  
    DroppdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HttpClientModule,
    RecipeModule,
    ShoppingModule,
    AuthModule
  ],
  providers: [ShoppingListService , RecipeService , 
    AuthGuard,
    {provide:HTTP_INTERCEPTORS , useClass:AuthInterceptorService , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
