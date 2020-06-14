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
    this._userservice.getUserByRole(this.role,this.userId).subscribe(data =>{
      console.log(data);
     if(this.role == 'Junior Developer'){
      data[2].forEach(ele => {
        if (ele.id != this.userId) {
          this.users.push(ele);
        }       
      });
      data[0].forEach(ele => {
        this.users.push(ele);
      });
      this.users.push(data[1]);
    }
    else{
      for (let ele in data) {
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
