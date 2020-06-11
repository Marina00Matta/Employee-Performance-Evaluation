import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { CriteriasService } from '../../../services/criterias.service';
import { ActivatedRoute , Router} from '@angular/router';


@Component({
  selector: 'app-trashed-criterias',
  templateUrl: './trashed-criterias.component.html',
  styleUrls: ['./trashed-criterias.component.css']
})
export class TrashedCriteriasComponent implements OnInit {
  criterias;
  types;
  constructor(
    private _criteriasService: CriteriasService,
    private route:ActivatedRoute ,
    private router:Router) { }

  ngOnInit(): void {
    this._criteriasService.getTrash().subscribe(dataType =>{
      console.log(dataType);
      this.criterias = dataType;
    });
  }
  getCriteriaTypeList(){
    this._criteriasService.getCriteriaTypes().subscribe(dataType =>{
      console.log(dataType)
      this.types = dataType;
    })
  }


}
