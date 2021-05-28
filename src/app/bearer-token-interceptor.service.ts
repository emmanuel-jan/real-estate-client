import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Constants} from './constants';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BearerTokenInterceptorService implements HttpInterceptor {

  constructor(public tokenService: TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith(Constants.API_ENDPOINT) && this.tokenService.getToken()!=null){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${this.tokenService.getToken()}`
        }
      });

      return next.handle(request);
    }
  }
}
