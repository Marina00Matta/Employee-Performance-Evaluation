import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../../services/evaluation.service';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  evaluations;
  criterias;
  constructor(private evaluationService:EvaluationService) { }

  ngOnInit(): void {
    this.evaluationService.getEvaluationReport().subscribe(data=>{
      this.evaluations=data;
      console.log(data);
      let criterias=[];
      for (let key in this.evaluations) {
         let eva ={
          name : key ,
          value : this.evaluations[key],
        } 
        criterias.push(eva);
      }
        console.log('final',criterias)
     
    });
      
    
  }

}
