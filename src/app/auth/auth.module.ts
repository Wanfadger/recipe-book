import { RouterModule } from '@angular/router';
import { LOadingSpinner } from './../shared/loading-spinner/loading-spinner.component';
import { AlertComponent } from './../shared/alert/alert.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";


@NgModule({
    declarations:[AuthComponent , AlertComponent , LOadingSpinner ],
    imports:[FormsModule , CommonModule , RouterModule.forChild([
        {path:"" , component:AuthComponent}
    ])],
    exports:[]
})
export class AuthModule{

}