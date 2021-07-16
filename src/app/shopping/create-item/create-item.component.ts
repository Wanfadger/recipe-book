import { Component, ElementRef, OnInit, Output, ViewChild  ,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  editMode:boolean = false
  editSubscription !:Subscription
  ingredient !:Ingredient
  
  @ViewChild('f') slForm !: NgForm

  constructor(private _shoppingListService:ShoppingListService) { }
  

  ngOnInit(): void {
   this.editSubscription = this._shoppingListService.onEditChange.subscribe(ingredient => {
     this.editMode = true
     this.ingredient = ingredient
     this.slForm.setValue({
       "name":this.ingredient.name,
       "amount": this.ingredient.amount
     })

   } )
  }

  add(){
   
  }

  addIngredient(){
    this._shoppingListService.deleteIngredient(this.ingredient)
  }

  onSubmit(form:NgForm){
   
   const formValue = form.value
   if(this.editMode){
    this._shoppingListService.updateIngredient(new Ingredient(this.ingredient.id ,formValue.name , formValue.amount))
   }else{
    const id = ++this._shoppingListService.getIngredients().length
    console.log(id)
    this._shoppingListService.addIngredient(new Ingredient(id ,formValue.name , formValue.amount))
   }
   this.editMode = false
   form.reset()
   
  }

  onReset(){
    this.slForm.reset()
    this.editMode = false
  }

  onDelete(){
    this._shoppingListService.deleteIngredient(this.ingredient)
   this.onReset()
  }

}
