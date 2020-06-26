import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RolesService } from '../../../services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
   roles;
  constructor(private _rolesService: RolesService,) { }

  ngOnInit(): void {
    this.getRolesList()
  }
getRolesList(){
  this._rolesService.getRoles().subscribe(data =>
    {this.roles =data;
      console.log(data);
    });
}
}
