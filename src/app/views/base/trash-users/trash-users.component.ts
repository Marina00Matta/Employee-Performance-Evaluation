import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { NgModule } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';



@Component({
  selector: 'app-trash-users',
  templateUrl: './trash-users.component.html',
  styleUrls: ['./trash-users.component.css']
})
export class TrashUsersComponent implements OnInit {
  trashedUsers;
  constructor(private _userservice:UsersService,
    private route:ActivatedRoute ,
    private router:Router) { }

  ngOnInit(): void {
    this._userservice.getTrash().subscribe((res:any)=>{
      console.log('trash',res.data);
     
      this.trashedUsers=res.data;
    });
  }

  restoreFunction(id){
    this._userservice.restoreTrash(id).subscribe(data =>{
      console.log(data)
      // location.reload();
      this.router.navigate(['/base/Users'])
    })
  }

}
