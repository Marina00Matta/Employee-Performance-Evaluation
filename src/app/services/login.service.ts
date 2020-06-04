import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn : 'root'
})

export class LoginService {
    constructor(private http: HttpClient,private route:Router){
    }

    login(data){
        console.log("send request from service");
        console.log(data)
        debugger
        return this.http.post("http://localhost:8000/api/sanctum/token",data).toPromise().then(result=>{
            console.log("login request")
            console.log(result);
           // var token = result[token];
            //sessionStorage.setItem("token",token);
            this.route.navigate(['/dashboard']);
        })
        .catch(error=>error);
    }

    getToken(){
        let token = sessionStorage.getItem("token");
        token="bearer " + token;
        return token;
    }
}