import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/interfaces/User';
@Injectable({
    providedIn : 'root'
})

export class LoginService {
    user : User;
    constructor(private http: HttpClient,private route:Router , private cookieService: CookieService){
    }

    login(data) {
      //debugger
      return this.http
        .get('http://localhost:8000/api/csrf-cookie', {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
          withCredentials: true,
        })
        .toPromise()
        .then(() => {
          console.log('login request ======================================');
          let xsrfToken = this.cookieService.get('XSRF-TOKEN');
          console.log('xsrfToken',xsrfToken)
          sessionStorage.setItem('XSRF-TOKEN',xsrfToken) ;
          return this.authenticate(xsrfToken, data);
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
      return this.http
        .post('http://localhost:8000/api/sanctum/token', data, {
          withCredentials: true,
          responseType: 'json',
        })
        .toPromise()
        .then(result => {
          let token = result['token']; 
          console.log(result);
          sessionStorage.setItem('token', token)
          let user_role = result['user'][0];
          sessionStorage.setItem('user_role',user_role);
          let user_id = result['data']['id'];
          sessionStorage.setItem('user_id',user_id);
          this.route.navigate(['/dashboard']);
        })
        .catch(error=>error)
    }

}
