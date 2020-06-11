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
  trashCriterias;
  types;
  constructor(
    private _criteriasService: CriteriasService,
    private route:ActivatedRoute ,
    private router:Router) { }

  ngOnInit(): void {
    this.getTrashedCriteriaList();
    this.getCriteriaTypeList();
  
  }
  getCriteriaTypeList(){
    this._criteriasService.getCriteriaTypes().subscribe(dataType =>{
      console.log(dataType)
      this.types = dataType;
    })
  }
  getTrashedCriteriaList(){
    this._criteriasService.getTrash().subscribe(data =>{
      console.log("trash",data)
      this.trashCriterias = data;
    })
  }
  restoreFunction(id){
    this._criteriasService.restoreTrash(id).subscribe(data =>{
      console.log(data)
      // location.reload();
      this.router.navigate(['/base/criteria'])
    })
  }



}
