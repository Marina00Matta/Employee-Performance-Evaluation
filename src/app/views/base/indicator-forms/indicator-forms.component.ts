import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { CriteriasService } from '../../../services/criterias.service';
import { IndicatorsService } from '../../../services/indicators.service';
import { ActivatedRoute , Router} from '@angular/router';


@Component({
  selector: 'app-indicator-forms',
  templateUrl: './indicator-forms.component.html',
  styleUrls: ['./indicator-forms.component.css']
})
export class IndicatorFormsComponent implements OnInit {
  criterias;
  indicators;
  constructor(private _indicatorsService: IndicatorsService,
    private _criteriasService: CriteriasService,
    private route:ActivatedRoute ,
    private router:Router
    ) { }

  ngOnInit(): void {
    this._criteriasService.getCriteria().subscribe(dataType =>{
      console.log(dataType);
      this.criterias = dataType;
    });
  }
  onSubmit(form: NgForm){
    if(form.valid){
    console.log(form.value);
    this._indicatorsService.addIndicator(form.value).subscribe((res: any)=>{
      console.log(res);
    });
    form.reset();
    this.router.navigate(['/base/indicator']);
    }
  }

}
