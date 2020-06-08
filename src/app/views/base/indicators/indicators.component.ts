import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../../../services/indicators.service';
import { CriteriasService } from '../../../services/criterias.service';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {
  indicators;
  criterias;
  constructor(private _indicatorService: IndicatorsService,
    private _criteriaService: CriteriasService) { }

  ngOnInit(): void {
    this.getIndicatorList();
    this._criteriaService.getCriteria().subscribe(datatype=>{
      this.criterias=datatype;
      console.log(datatype);
    })
  }
  
  deleteIndicator(id){
    this._indicatorService.deleteIndicator(id).subscribe(() =>{})
    console.log(id)
    this.getIndicatorList();
  }

  getIndicatorList(){
    this._indicatorService.getIndicators().subscribe(data =>{
      console.log(data)
      this.indicators = data;
    })
  }

}
