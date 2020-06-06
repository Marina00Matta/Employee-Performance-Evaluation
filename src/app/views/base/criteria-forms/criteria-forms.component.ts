import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CriteriasService } from '../../../services/criterias.service';


@Component({
  selector: 'app-criteria-forms',
  templateUrl: './criteria-forms.component.html',
  styleUrls: ['./criteria-forms.component.css']
})
export class CriteriaFormsComponent implements OnInit {
  types;
  constructor(private _criteriasService: CriteriasService,) { }

  ngOnInit(): void {
    this._criteriasService.getCriteriaTypes().subscribe(dataType =>{      
      this.types = dataType;
    })

  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }

}
