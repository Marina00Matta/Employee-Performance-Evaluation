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
  constructor(private userService:UsersService , private router:Router , private evaluationCycle:EvaluationCycleService) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((res:any) =>{
      this.users=res.data;
      console.log(res.data);
      
    });
    this.evaluationCycle.getEvaluationCycle().subscribe(dataCycle =>{this.cycles = dataCycle;
    console.log(dataCycle);
    })
  }
 
  onClick(user_id,id){
    console.log(user_id ,Number(id));
    this.router.navigate(['/buttons/report-view',user_id,Number(id)])

  }
  
}
