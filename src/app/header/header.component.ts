import { Component, EventEmitter, Output } from "@angular/core";



@Component({
    selector:"app-header" , 
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})
export class HeaderComponent{

   @Output() selectEvent: EventEmitter<String> = new EventEmitter();


    onSelect(selected:String){
        this.selectEvent.emit(selected)
    }

}