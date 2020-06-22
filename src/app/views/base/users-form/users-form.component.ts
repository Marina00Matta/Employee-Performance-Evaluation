import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { NgForm } from '@angular/forms';
import { RolesService } from '../../../services/roles.service';
import { GroupService } from '../../../services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  users;
  roles;
  grps;
  is_added= false;
  filedata:any;
    fileEvent(e){      
    this.filedata = e.target.files[0];
    }
  constructor(private _userservice:UsersService,private _rolesService: RolesService,
              private route:Router , private _grpService:GroupService) { }

  ngOnInit(): void {
    this._rolesService.getRoles().subscribe(roleData =>{
      this.roles=roleData;
    });
    
    this._grpService.getGroups().subscribe(data =>{
      this.grps = data ;
    })

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
        });        
      this._userservice.addUser(myFormData).subscribe((res: any) => {
        // console.log(res);
        this.is_added=true;
        form.reset;
        this.route.navigate(['/base/Users']);
      });
    }
  }
}
