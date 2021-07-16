import { Router } from '@angular/router';
import { AuthResponse, AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
isLogin = false;
isLoading = false
error :string|null = null

constructor(private _authService:AuthService , private _router:Router){}

switchMode(){
  this.isLogin = !this.isLogin
}


onSubmit(authForm:NgForm){
  if(!authForm.valid){return}

  this.isLoading = true
  const authData = {"email":authForm.value.email , password:authForm.value.password , returnSecureToken:true}
  let authObservable :Observable<AuthResponse>

  if(this.isLogin){
 authObservable = this._authService.login(authData)
  }else{
   authObservable = this._authService.signUp(authData) 
  }

  authObservable.subscribe(response => {
      console.log("Auth "+JSON.stringify(response))
      authForm.reset()
      this.isLoading = false
      this.goToRecipe()
    } , error => {
      this.isLoading  = false
     this.error = error.error.error.message
      // console.log("Error "+JSON.stringify(error))
      console.log(error.error.error.message)
    })
}

goToRecipe(){
  this._router.navigate(["/recipes"])
}

closeAlert(){
  this.error = null
}

}
