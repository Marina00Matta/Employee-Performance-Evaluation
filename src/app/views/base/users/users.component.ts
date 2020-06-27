import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgModule } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  dtOptions: DataTables.Settings = {};
  temp; 
  filteredUsers;
  supervisorList;
  title = 'angulardatatables';
  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;
  constructor(private _userservice:UsersService) { }

  ngOnInit(): void {
   this.getUsersList();
  }

  deleteUser(id){
    this._userservice.deleteUser(id).subscribe(deleted =>{
      console.log("deleted user");
      this.getUsersList();
    });
  }
  getUsersList(){
    this._userservice.getUsers().subscribe((res:any) =>{
      this.users=res.data;
      this.filteredUsers = this.users.filter(elem => elem['name'] !== 'Superadmin');
      this.refreshUsers();
      console.log("filteredUsers",this.filteredUsers)
      this.temp = this.filteredUsers;
    });

  }

  refreshUsers(){
    console.log('cc',this.users)
    if(this.users){
      this.filteredUsers.forEach(element => {
        let data =  this.users.filter(elem => elem['id'] == element['supervisor']);
        console.log("data[0]",data)
        if(data[0]){
          element.supervisorname = data[0]['name'];
        }else{
          element.supervisorname = null;
        }
      });
    }
  }


  updateFilter(event) {
    const val = event.target.value.toString().toLowerCase().trim();
    // filter our data
    const temp = this.temp.filter(function (d) {
      console.log("d",d)
      return (d.name.toString().toLowerCase().indexOf(val) !== -1 ) ||
      (d.email.toString().toLowerCase().indexOf(val) !== -1 ) ||
      (d.role.toString().toLowerCase().indexOf(val) !== -1 ) ||
      (d.hiring_at.toString().toLowerCase().indexOf(val) !== -1 ) ||
      (d.groups.toString().toLowerCase().indexOf(val) !== -1 ) ||
      !val;
    });
    // update the rows
    this.filteredUsers = temp;
    // Whenever the filter changes, always go back to the first page
    this.myFilterTable.offset = 0;
  }

}
