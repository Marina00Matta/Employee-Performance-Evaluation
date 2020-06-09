import { Component, OnInit } from '@angular/core';
import { CriteriasService } from '../../../services/criterias.service';
@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {
  criterias;
  constructor(private criteriaService: CriteriasService) {}

  ngOnInit(): void {
    this.criteriaService.getCriteria().subscribe(data=>{
      this.criterias=data;
    })
  }

}
