import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { EvaluationCycleService } from '../../base/EvaluationCycle/EvaluationCycle.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  users;
  cycles;
  constructor(private userService:UsersService , private evaluationCycle:EvaluationCycleService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res:any) =>{
      this.users=res.data;
      console.log(res.data);
      
    });
    this.evaluationCycle.getEvaluationCycle().subscribe(dataCycle =>{this.cycles = dataCycle;
    console.log(dataCycle);
    })
  }
 
  onSubmit(form: NgForm){
    console.log(form.value);
    
  }
}
