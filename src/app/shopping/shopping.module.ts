
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { CreateItemComponent } from "./create-item/create-item.component";
import { ShoppingItemComponent } from "./shopping-item/shopping-item.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingComponent } from "./shopping.component";


@NgModule({
    declarations:[ 
         ShoppingComponent,
        ShoppingListComponent,
        ShoppingItemComponent,
        CreateItemComponent],
    imports:[CommonModule , FormsModule , RouterModule.forChild([
        {path:"" , component:ShoppingListComponent}
    ])],
    exports:[]
})
export class ShoppingModule{


}