import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { UsersService } from '../../../services/users.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  users;
  constructor(private _userservice:UsersService) { }

  ngOnInit(): void {
    this._userservice.getUsers().subscribe((res:any) =>{
      this.users=res.data;
    });
  }


  addUser(form: NgForm){
    if(form.valid){
      this._userservice.addUser(form.value).subscribe((res: any) => {
        console.log(res);
      })
      console.log(form.value);
    }
    form.reset;
  }
}
