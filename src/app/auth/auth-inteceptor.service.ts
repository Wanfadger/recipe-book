import { exhaustMap } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    
    constructor(private _userService:AuthService){}

    intercept(req:HttpRequest<any> , next:HttpHandler){
        return this._userService.userSubject.pipe(take(1) , exhaustMap(user => {
            if(!user){
                return next.handle(req)
            }
            const r = req.clone({params: new HttpParams().set("auth" , user.token)})
            return next.handle(r)
        }))
        
    }

}