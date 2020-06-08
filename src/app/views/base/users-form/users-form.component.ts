import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { NgForm } from '@angular/forms';
import { RolesService } from '../../../services/roles.service';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  users;
  roles;
  filedata:any;
    fileEvent(e){      
    this.filedata = e.target.files[0];
    }
  constructor(private _userservice:UsersService,private _rolesService: RolesService) { }

  ngOnInit(): void {
    this._rolesService.getRoles().subscribe(roleData =>{
      console.log(roleData);
      this.roles=roleData;
    });
    
    this._userservice.getUsers().subscribe((res:any) =>{
      this.users=res.data;
    });
  }


  addUser(form: NgForm){
    if(form.valid){
       let myFormData= new FormData();
        myFormData.append('avatar',this.filedata,this.filedata.name)
        
        Object.entries(form.value).map(value =>{
          myFormData.append(`${value[0]}`,`${value[1]}`);
        })
      this._userservice.addUser(myFormData).subscribe((res: any) => {
        console.log(res);
      })
      console.log(myFormData);
    }
    form.reset;
  }
}
