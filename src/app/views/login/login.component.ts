import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
// import {  } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  error:boolean;
  constructor(private login:LoginService){

  }

  email:"";
  password:"";

  ngOnInit(){
  }

  
  submit(data){
    this.login.login(data).then(result=>{
      console.log(result);
    })
  }

  ForgetPass(){
    window.location.href ='http://localhost:8000/password/reset/';
  }

}
