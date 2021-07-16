import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate{

    constructor(private _authService:AuthService  ,  private _router:Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<boolean | UrlTree>|Promise<boolean | UrlTree>|boolean|UrlTree {
        return this._authService.userSubject.pipe(take(1) , map(user => {
         const isAuth = !!user
         if(isAuth) { return true}
         return this._router.createUrlTree(["/auth"])
        }))
        //always subscribe once
        }

}