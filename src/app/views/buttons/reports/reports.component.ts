import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { EvaluationCycleService } from '../../base/EvaluationCycle/EvaluationCycle.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  users;
  cycles;
  constructor(private userService:UsersService , private evaluationCycle:EvaluationCycleService,
    private route:ActivatedRoute ,private router:Router,) { }

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

  onClick(){
    this.router.navigate( ['/buttons/report-view', {id: 1, id2: 2}]);
  }
}
