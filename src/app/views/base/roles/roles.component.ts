import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

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
    this._rolesService.getRoles().subscribe(roleData =>{
      console.log(roleData);
      this.roles=roleData;
    });
  }

}
