import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { catchError , tap } from "rxjs/operators";
import { User } from "./user.model";
import { environment } from "../../environments/environment";

export interface AuthResponse{
    idToken:string
   			email:string
   			refreshToken:string
   			expiresIn:string
   			localId:string
            registered?:boolean
}

@Injectable({providedIn:"root"})
export class AuthService{
    userSubject = new BehaviorSubject<User|any>(null)
   
    constructor(private _http:HttpClient){}

    signUp(data:{email:string , password:string , returnSecureToken:boolean}):Observable<AuthResponse>{
      return this._http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.fireBaseApKey}` , data)
      .pipe(tap(resData => this.handleAuthentication(resData.email ,  resData.localId , resData.idToken , resData.expiresIn)))
         
    }


    login(data:{email:string , password:string , returnSecureToken:boolean}):Observable<AuthResponse>{
      return this._http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.fireBaseApKey}` , data)
      .pipe(tap(resData => this.handleAuthentication(resData.email ,  resData.localId , resData.idToken , resData.expiresIn)))
         
    }

    private handleAuthentication(email:string  ,id:string , token:string ,tokenExpirationDate:string){
      const expire = (24*60*60) +Number(tokenExpirationDate)
        const expirationDate = new Date(new Date().getTime()+ expire)
        console.log("EXPIRE TYM "+expirationDate)
       const user = new User(email , id, token , expirationDate)
       this.userSubject.next(user)
       localStorage.setItem("userData" , JSON.stringify(user))
    }


    autoLogin(){
      const userData:{email:string , id:string , _token:string , _tokenExpirationDate:string} = JSON.parse(localStorage.getItem("userData") || '{}')
     localStorage.removeItem('user')
      if(!userData){ return}

      const loadedUser = new User(userData.email , userData.id , userData._token , new Date(userData._tokenExpirationDate))
      if(loadedUser.token){
        this.userSubject.next(loadedUser)
      }
      
    }


}