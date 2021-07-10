import { Component, ElementRef, OnInit, Output, ViewChild  ,EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  name !:string
  amount !:Number 

  constructor(private _shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  
  }

  add(){
   
  }

  addIngredient(){
    if(this.name.length > 0 && this.amount > 0){
      this._shoppingListService.addIngredient(new Ingredient(this.name , this.amount))
     }
    
  }

}
