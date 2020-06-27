import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { RolesService } from '../../../services/roles.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
   roles;
   dtOptions: DataTables.Settings = {};
   temp; 
   title = 'angulardatatables';
   @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;
  constructor(private _rolesService: RolesService,) { }

  ngOnInit(): void {
    this.getRolesList()
  }
getRolesList(){
  this._rolesService.getRoles().subscribe(data =>
    {
      this.temp = data;
      this.roles =data;
      console.log(data);
    });
}
updateFilter(event) {
  const val = event.target.value.toString().toLowerCase().trim();
  // filter our data
  const temp = this.temp.filter(function (d) {
    console.log("d",d)
    return (d.name.toString().toLowerCase().indexOf(val) !== -1 ) 
    || !val;
  });
  // update the rows
  this.roles = temp;
  // Whenever the filter changes, always go back to the first page
  this.myFilterTable.offset = 0;
}

}
