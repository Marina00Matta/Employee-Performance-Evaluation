import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CriteriasService } from '../../../services/criterias.service';


@Component({
  selector: 'app-criteria-forms',
  templateUrl: './criteria-forms.component.html',
  styleUrls: ['./criteria-forms.component.css']
})
export class CriteriaFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addCriteria(form: NgForm){
    console.log(form.value);
  }

}
