import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
 users;
  constructor(private _userservice:UsersService) { }

  ngOnInit(): void {
    this._userservice.getUsers().subscribe((res:any) =>{
      this.users=res.data;
      console.log(res.data);
    });
  }

}
