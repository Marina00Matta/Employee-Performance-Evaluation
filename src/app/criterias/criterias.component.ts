import { Component, OnInit } from '@angular/core';
import { CriteriasService } from './criterias.service'
@Component({
  // selector: 'app-criterias',
  templateUrl: './criterias.component.html'
})
export class CriteriasComponent implements OnInit {
  criterias;
  constructor(private _criteriasService: CriteriasService,) { }

  ngOnInit(): void {
    this._criteriasService.getCriteria().subscribe(data =>{
      console.log(data)
      this.criterias = data;
    })
  }

}
