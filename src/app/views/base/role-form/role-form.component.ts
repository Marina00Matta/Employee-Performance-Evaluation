import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RolesService } from '../../../services/roles.service';
import { ActivatedRoute , Router} from '@angular/router';



@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {
  roles=[];
  constructor(private _rolesService: RolesService,
    private route:ActivatedRoute ,
    private router:Router) { }

  ngOnInit(): void {
    this._rolesService.getRoles().subscribe(data =>
      { 
        for (let ele in data) {          
          if(data[ele].name !== 'superadmin')
           {
            this.roles.push(data[ele]);
           }
        }        
      });
  }

  addPosition(form: NgForm){
    console.log(form.value);
    if(form.valid)
    {this._rolesService.addRole(form.value).subscribe((res :any) =>{
      console.log(res);
    });
    }
    form.reset;
    this.router.navigate(['/base/positions']);
    
  }

}
