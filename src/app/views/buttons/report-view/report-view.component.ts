import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../../services/evaluation.service';
import {  ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  evaluations;
  criterias=[];
  userId:number;
  cycleId:number;
  constructor(private evaluationService:EvaluationService,
    private route:ActivatedRoute ,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.userId = +params['id'];
      this.cycleId = +params['Cid'];
      console.log(this.userId,this.cycleId);
    });
    this.evaluationService.getEvaluationReport(this.userId,this.cycleId).subscribe(data=>{
      this.evaluations=data;
      console.log(data);
      // let criterias=[];
      for (let key in this.evaluations) {
         let eva ={
          name : key ,
          value : this.evaluations[key],
        } 
        this.criterias.push(eva);
      }
        console.log('final',this.criterias)
     
    });
      
    
  }

}
