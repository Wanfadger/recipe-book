import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  show:string  = "Recipe";

  constructor(){
  }

  onNavigate(selected:any){
   this.show = selected;
  }

  

}
