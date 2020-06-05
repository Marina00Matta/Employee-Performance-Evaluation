import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
}
  from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  token;
  constructor(private router: Router) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("test test")
    //debugger;
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ` + sessionStorage.getItem("token"),
        'X-XSRF-TOKEN': sessionStorage.getItem("XSRF-TOKEN"),
      }
      ,withCredentials: true,
      //responseType: 'json',
    });
    return next.handle(request).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err);
          console.log('req url :: ' + request.url);
          if (err.status === 403) {
            this.router.navigate(['/']);
          }
        }
      }));
  }
  
  
  
}