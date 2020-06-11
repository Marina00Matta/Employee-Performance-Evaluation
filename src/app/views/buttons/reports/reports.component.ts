import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { EvaluationCycleService } from '../../base/EvaluationCycle/EvaluationCycle.service';
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
    this.userService.getUsers().subscribe(data => {this.users = data;});
    this.evaluationCycle.getEvaluationCycle().subscribe(dataCycle =>{this.cycles = dataCycle ;})
  }
 
}
