import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Constants } from './constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // we need to use HttpClient -> HttpClientModule
  constructor(
    private http: HttpClient
  ) { }

  USER_KEY = "user";

  identity(force?:boolean):Observable<any>{
    let user = this.getUserFromStorage();

    if(force){
      user = null;
    }

    if(user){
      return of(user);
    }else{
      return this.getUser();
    }
  }

  getToken(data): Observable<any> {
    return this.http.post(Constants.API_ENDPOINT + "auth", data);
  }

  registerUser(data): Observable<any> {
    return this.http.post(Constants.API_ENDPOINT + "user", data, { responseType: "text" });
  }

  requestReset(email): Observable<any> {
    return this.http.post(Constants.API_ENDPOINT + "reset/request", email, { responseType: "text" });
  }

  changePassword(data): Observable<any> {
    return this.http.post(Constants.API_ENDPOINT + "reset/finish", data, { responseType: "text" });
  }

  saveUser(user){
    localStorage.setItem(this.USER_KEY,user);
  }

  getUserFromStorage(){
    return JSON.parse(localStorage.getItem(this.USER_KEY));
  }

  getUser():Observable<any>{
    return this.http.get(Constants.API_ENDPOINT+"account");
  }

}
