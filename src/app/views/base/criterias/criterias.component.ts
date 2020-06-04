import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { CriteriasService } from './criterias.service';
@Component({
  selector: 'app-criterias',
  templateUrl: './criterias.component.html'
})
export class CriteriasComponent implements OnInit {
  criterias;
  types;  
  constructor(private _criteriasService: CriteriasService,) { }

  ngOnInit(): void {
    this._criteriasService.getCriteria().subscribe(data =>{
      console.log(data)
      this.criterias = data;
    })
    this._criteriasService.getCriteriaTypes().subscribe(dataType =>{
      console.log(dataType)
      this.types = dataType;
    })
  }
  deleteFunction(id){
    this._criteriasService.deleteCriteria(id).subscribe(()=>console.log('deleted'));
          console.log(id);
  }

}
