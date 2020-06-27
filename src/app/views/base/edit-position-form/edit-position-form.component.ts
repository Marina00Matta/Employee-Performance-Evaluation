import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RolesService } from '../../../services/roles.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-edit-position-form',
  templateUrl: './edit-position-form.component.html',
  styleUrls: ['./edit-position-form.component.css']
})
export class EditPositionFormComponent implements OnInit {
  roles=[];
  role_id;
  role;
  permissions=[];

  constructor(private _rolesService: RolesService,
    private route:ActivatedRoute ,
    private router:Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.role_id = +params['id'];
      }); 

    this._rolesService.getRoles().subscribe(data =>
      { console.log(data);
        for (let ele in data) {          
          if(data[ele].name !== 'superadmin')
           {
            this.roles.push(data[ele]);
           }
        }    
        console.log(this.roles);
      });

    this._rolesService.getRoleById(this.role_id).subscribe(data=>
      {
        this.role = data;
        this.role['permissions'].forEach(ele => {
          this.permissions.push(ele.toString());
       }); 
       console.log(this.permissions);
       
      });  
  }

  onSubmit(form: NgForm){
    if(form.valid)
    {this._rolesService.editRole(form.value, this.role_id).subscribe((res :any) =>{
      console.log(res);
    });
    }
    form.reset;
    this.router.navigate(['/base/positions']);
  }
}
