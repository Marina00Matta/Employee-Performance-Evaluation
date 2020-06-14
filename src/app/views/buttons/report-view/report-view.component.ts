import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../../services/evaluation.service';
import {  ActivatedRoute,Router} from '@angular/router';
import * as jsPDF from 'jspdf';
import { ViewChild, ElementRef } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { EvaluationCycleService } from '../../../services/EvaluationCycle.service';


@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  @ViewChild('htmlData') htmlData:ElementRef;
  user_role=sessionStorage.getItem('user_role');
  evaluations;
  criterias=[];
  userId:number;
  cycleId:number;
  user;
  cycle;
  constructor(private evaluationService:EvaluationService,
    private route:ActivatedRoute ,
    private router:Router,
    private userService:UsersService , 
    private evaluationCycle:EvaluationCycleService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.userId = +params['id'];
      this.cycleId = +params['Cid'];
      console.log(this.userId,this.cycleId);
    });
    this.evaluationService.getEvaluationReport(this.userId,this.cycleId).subscribe(data=>{
      this.evaluations=data;
      console.log(data);
      for (let key in this.evaluations) {
         let eva ={
          name : key ,
          value : this.evaluations[key],
        } 
        this.criterias.push(eva);
      }
        console.log('final',this.criterias)
     
    });
    this.getUser(this.userId);
    this.getCycle(this.cycleId);
  }
    
    getUser(id){
      this.userService.getUserById(id).subscribe(data=>{
        this.user=data;
        console.log('user',data);
      })
    }

    getCycle(Cid){
      this.evaluationCycle.getEvaluationCycleById(Cid).subscribe(data=>{
        this.cycle=data;
        console.log('cycle',data);
      })
    }
    
  
  public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    doc.fromHTML(DATA.innerHTML,30,30,{
      'width': 170, 
     });
    doc.output('dataurlnewwindow');
  }

}
