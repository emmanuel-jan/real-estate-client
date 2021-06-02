import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  JWT_KEY = 'id_token';
  // tslint:disable-next-line: max-line-length

  public saveToken(token: string): void {
    localStorage.setItem(this.JWT_KEY, token);
    sessionStorage.setItem(this.JWT_KEY, token);
  }

  public clearToken(): void {
    localStorage.removeItem(this.JWT_KEY);
    sessionStorage.removeItem(this.JWT_KEY);
  }

  public getToken(): any {
    return localStorage.getItem(this.JWT_KEY) || sessionStorage.getItem(this.JWT_KEY);
  }

}