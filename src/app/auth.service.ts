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

  // method -> email, password -> are usually observable ->expect call backs

  getToken(data):Observable<any>{
    return this.http.post("http://localhost:8080/api/auth",data);
  }
  
}
