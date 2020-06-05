import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
    providedIn : 'root'
})

export class LoginService {
    constructor(private http: HttpClient,private route:Router , private cookieService: CookieService){
    }

    login(data) {
      return this.http
        .get('http://localhost:8000/api/csrf-cookie', {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
          withCredentials: true,
        })
        .toPromise()
        .then(() => {
          console.log('login request ======================================>1');
          let xsrfToken = this.cookieService.get('XSRF-TOKEN');
          console.log('xsrfToken',xsrfToken)
          sessionStorage.setItem('XSRF-TOKEN',xsrfToken) ;
          this.authenticate(xsrfToken, data);
        })

        .catch((error) => console.log(error));
    }

    getToken() {
      let token = sessionStorage.getItem('token');
      token = 'bearer ' + token;
      return token;
    }

    getXsrfToken (){
      let xsrfToken = sessionStorage.getItem('XSRF-TOKEN');
      return xsrfToken;
    }

    

    authenticate(xsrfToken, data) {
      this.http
        .post('http://localhost:8000/api/sanctum/token', data, {
          headers: {
            'X-XSRF-TOKEN': xsrfToken,
          },
          withCredentials: true,
          responseType: 'json',
        })
        .toPromise()
        .then((result) => {
          let token = result['token'];
          sessionStorage.setItem('token', token);
          this.route.navigate(['/dashboard']);
        })
        .catch((error) => console.log(error));
    }

}
