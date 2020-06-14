import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private _userservice:UsersService) { }

  ngOnInit(): void {
   this.getUsersList();
  }

  deleteUser(id){
    this._userservice.deleteUser(id).subscribe(deleted =>{
      console.log("deleted user");
      this.getUsersList();
    });
  }
  getUsersList(){
    this._userservice.getUsers().subscribe((res:any) =>{
      this.users=res.data;
      console.log(res.data);
      
    });
  }

}
