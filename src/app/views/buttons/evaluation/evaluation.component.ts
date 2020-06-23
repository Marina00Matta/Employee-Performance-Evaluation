import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import {  Router} from '@angular/router';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
 users ;
 role = sessionStorage.getItem('user_role');
 EvaluatorId = sessionStorage.getItem('user_id');
  constructor(private _userservice:UsersService, private router:Router) { }

  ngOnInit(): void {
    this._userservice.getUserByRole(this.role).subscribe(data =>{
      for (let ele in data) {
         if ( data[ele].id != this.EvaluatorId) {
          this.users = [... data[ele]] ;
        }
        console.log(this.users);
        
        }
  });
} 

  onClick(uid){
      this.router.navigate(['buttons/evaluate-form',uid]);
  }
}
