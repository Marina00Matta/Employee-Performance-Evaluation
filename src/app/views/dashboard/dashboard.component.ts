import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { UsersService } from '../../services/users.service';
import { DatePipe } from '@angular/common';
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  user;
  // today = new Date().toJSON("yyyy/MM/dd");
  id =sessionStorage.getItem('user_id');
  today = new Date().toISOString().slice(0, 10);
  constructor(private userService:UsersService,private datePipe: DatePipe){}
 

  ngOnInit(): void {
     this.userService.getUserById(this.id).subscribe(data =>{
       this.user=data;
     });
  
   
  }
}
