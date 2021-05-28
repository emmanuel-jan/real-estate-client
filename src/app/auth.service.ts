import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from './constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // we need to use HttpClient -> HttpClientModule
  constructor(
    private http:HttpClient
  ) { }

  getToken(data):Observable<any>{
    return this.http.post(Constants.API_ENDPOINT+"auth",data);
  }

  saveUser(data):Observable<any>{
    return this.http.post(Constants.API_ENDPOINT+"user",data,{responseType:"text"});
  }

  requestReset(email):Observable<any>{
    return this.http.post(Constants.API_ENDPOINT+"reset/request",email, {responseType:"text"});
  }
  
  changePassword(data):Observable<any>{
    return this.http.post(Constants.API_ENDPOINT+"reset/finish",data,{responseType:"text"});
  }
}
