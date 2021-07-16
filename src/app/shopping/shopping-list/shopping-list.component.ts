import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients !: Ingredient[]; 

  constructor(private _shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this._shoppingListService.getIngredients()
    this._shoppingListService.onIngredientChange.subscribe( res => this.ingredients = res )
  }


}
