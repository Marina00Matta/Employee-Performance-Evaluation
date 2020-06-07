import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RolesService } from '../../../services/roles.service';


@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

  constructor(private _rolesService: RolesService,) { }

  ngOnInit(): void {
  }

  addPosition(form: NgForm){
    console.log(form.value);
    if(form.valid)
    {this._rolesService.addRole(form.value).subscribe((res :any) =>{
      console.log(res);
    });
    }
    form.reset;
  }

}
