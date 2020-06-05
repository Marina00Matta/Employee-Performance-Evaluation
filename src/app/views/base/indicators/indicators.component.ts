import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from './indicators.service';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {
  indicators;
  constructor(private _indicatorService: IndicatorsService) { }

  ngOnInit(): void {
    this.getIndicatorList();
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
