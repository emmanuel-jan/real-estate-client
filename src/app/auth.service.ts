import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // we need to use HttpClient -> HttpClientModule
  constructor(
    private http:HttpClient
  ) { }

  getToken(data):Observable<any>{
    return this.http.post("http://localhost:8080/api/auth",data);
  }

  saveUser(data):Observable<any>{
    return this.http.post("http://localhost:8080/api/user",data,{responseType:"text"});
  }
  
}
