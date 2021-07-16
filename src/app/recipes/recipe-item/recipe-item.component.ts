import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core'; 
import { Route, Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe !: Recipe

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  

  onSelectedRecipe(){
    this._router.navigate(["/recipes" , this.recipe.id])
  }

}
