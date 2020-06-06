import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CriteriasService } from '../../../services/criterias.service';
import { from } from 'rxjs';


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
      console.log(dataType);
      
      this.types = dataType;
    })

  }

  onSubmit(form: NgForm){
    if(form.valid){
    console.log(form.value);
    this._criteriasService.addCriteria(form.value).subscribe((res: any)=>{
      console.log(res);
    });
    form.reset();
    }
  }

}
