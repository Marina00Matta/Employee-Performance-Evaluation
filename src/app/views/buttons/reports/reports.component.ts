import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { EvaluationCycleService } from '../../../services/EvaluationCycle.service';
import {  Router} from '@angular/router';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  users;
  cycles;
  User_role=sessionStorage.getItem('user_role');
  constructor(private userService:UsersService , private router:Router , private evaluationCycle:EvaluationCycleService) { }
  ngOnInit(): void {
    if(this.User_role == 'superadmin' || this.User_role == 'Admin'){
        this.userService.getUsers().subscribe((res:any) =>{
          this.users=res.data;
          console.log(res.data);
        });
    }else{
        let userId = sessionStorage.getItem('user_id');
        this.userService.getUserById(userId).subscribe((res:any) =>{
          this.users= [];
          this.users.push(res) ;
          console.log(res);
    })
  }

    this.evaluationCycle.getEvaluationCycle().subscribe(dataCycle =>{this.cycles = dataCycle;
    console.log(dataCycle);
    })
  }
 
  onClick(user_id,id){
    console.log(user_id ,Number(id));
    this.router.navigate(['/buttons/report-view',user_id,Number(id)])

  }
  
}
