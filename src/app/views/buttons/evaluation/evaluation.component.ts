import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import {  Router} from '@angular/router';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
 users = [];
 role = sessionStorage.getItem('user_role');
 userId = sessionStorage.getItem('user_id');
  constructor(private _userservice:UsersService, private router:Router) { }

  ngOnInit(): void {
    this._userservice.getUserByRole(this.role).subscribe(data =>{
      for (let ele in data) {
         if ( data[ele].id != this.userId) {
          this.users.push(data[ele]);
        }
        }
  });
  console.log(this.users);
    
} 

  onClick(id){
    this._userservice.getUserById(id).subscribe(data=>{
      console.log('user',data['role']);
      let role_id = data['role'];
      console.log(role_id);
      this.router.navigate(['buttons/evaluate-form',role_id,id]);

    });

  }
}
