import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:  Recipe[]
  constructor() { 
    this.recipes = 
    [new Recipe("Test Recipe" , "This is A test recipe" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwTPQImajlKz678fBeLji9MomX-F0Y2wu6Q&usqp=CAU"),
    new Recipe("name" , "desscription" , "https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg"),
   ]
  }

  ngOnInit(): void {
  }

}
