import { Router } from '@angular/router';
import { User } from './../auth/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, EventEmitter, OnDestroy, OnInit } from "@angular/core";



@Component({
    selector:"app-header" , 
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})
export class HeaderComponent implements OnInit , OnDestroy{
    userSub !:Subscription
    user !:User
    isAuthenticated = false
    constructor(private _authService:AuthService ,private _router:Router){

    }

    ngOnInit(){
       this.userSub = this._authService.userSubject.subscribe(user => this.isAuthenticated = !!user)
    }

    ngOnDestroy(){
      this.userSub.unsubscribe()
    }

    logOut(){
      this._authService.userSubject.next(null)
      this.isAuthenticated = false
      localStorage.removeItem("userData")
      this._router.navigate(["/auth"])
    }

}