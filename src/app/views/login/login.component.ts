import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FireAlertService } from 'src/app/services/fire-alert.service';
// import {  } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  error:boolean;
  constructor(private login:LoginService,private alert:FireAlertService){

  }

  email:"";
  password:"";

  ngOnInit(){
  }

  
  submit(data){
    this.login.login(data).then(result=>{
      console.log(result);
      this.error=(result)?true:false;
    });
  }

  ForgetPass(){
    window.location.href ='http://localhost:8000/password/reset/';
  }

}
