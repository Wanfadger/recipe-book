import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
 @Input() index!: number
 
 ingredient !:Ingredient
 
 constructor(private _shoppingService:ShoppingListService) { }

  ngOnInit(): void {
   this.ingredient = this._shoppingService.getIngredient(this.index)
  }

  onEdit(){
   this._shoppingService.onEditChange.next(this.ingredient)
  }


}
