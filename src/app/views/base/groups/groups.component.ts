import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../../services/group.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups;
  constructor(private _groupService:GroupService) { }

  ngOnInit(): void {
     this.getAllGroup();
  }
 
  getAllGroup() {
     this._groupService.getGroups().subscribe(data =>{
       this.groups = data ;
     });
  }
}
