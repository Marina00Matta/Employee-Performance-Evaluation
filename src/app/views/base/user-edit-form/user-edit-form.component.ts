import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { RolesService } from '../../../services/roles.service';
import { GroupService } from '../../../services/group.service';




@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {
  user;
  users;
  id:number;
  roles;
  grps;
  
  filedata:any;
    fileEvent(e){      
    this.filedata = e.target.files[0];
    }

  constructor(private _userservice:UsersService,
              private route:ActivatedRoute ,
              private _rolesService: RolesService,
              private router:Router,
              private _grpService:GroupService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    });

    this._userservice.getUserById(this.id).subscribe(data =>{
      this.user=data ;
      console.log(data);
    });

    this._userservice.getUsers().subscribe((res:any) =>{
      this.users=res.data;
    });

    this._rolesService.getRoles().subscribe(roleData =>{
      this.roles=roleData;
    });
    this._grpService.getGroups().subscribe(data =>{
      this.grps = data ;
    })

  }
  
  editUser(form: NgForm){
    if(form.valid){
      // let myFormData= new FormData();
      console.log(form.value);
     
       
      //  Object.entries(form.value).map(value =>{
      //    myFormData.append(`${value[0]}`,`${value[1]}`);
      //  })
       this._userservice.editUser(this.id,form.value).subscribe((res: any)=>{
        console.log(res);
       }
       ,(error)=> {console.error(error);}
       , () => {form.reset();}
       );
    }
    this.router.navigate(['/base/Users']);
  }
}
