import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable , BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem("user_data") !=null){
     this.userData()
    }
   }

  user = new BehaviorSubject(null);

  register(userdata: Object):Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup' , userdata)
  }

  login(userdata: Object):Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin' , userdata)
  }

  logOut(){
    localStorage.removeItem("user_data");
    this.user.next(null);
    this._Router.navigate(["/login"]);
  }

  userData(){
  let userInfo =JSON.stringify( localStorage.getItem('user_data' ));
  let decoded:any = jwtDecode(userInfo);
    this.user.next(decoded);
  }

}
