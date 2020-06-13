import { IndicatorsService } from '../../../services/indicators.service';
import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Indicator } from 'src/app/interfaces/Indicators';
import { Criteria } from 'src/app/interfaces/Criteria';
import { CriteriasService } from '../../../services/criterias.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FireAlertService } from 'src/app/services/fire-alert.service';
import {EvaluationCycle} from 'src/app/interfaces/EvaluationCycle';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {
  indicators;
  editableObj : Indicator;
  editIndicator : FormGroup;
  criterias;
  trashIndicators;
  constructor(private _indicatorService: IndicatorsService,private modalService: BsModalService,
    private alert:FireAlertService,private _criteriasService: CriteriasService) { }

  ngOnInit(): void {
    this.getIndicatorList();
    this.getCriteriaList();
    this.getTrashedIndicatorList();
    }
  
  deleteIndicator(id){
    this._indicatorService.deleteIndicator(id).subscribe(() =>{location.reload();})
    console.log(id)
  }

  getIndicatorList(){
    this._indicatorService.getIndicators().subscribe(data =>{
      console.log(data)
      this.indicators = data;
    })
  }

  getCriteriaList(){
    this._criteriasService.getCriteria().subscribe(dataType =>{
      console.log("cccc",dataType);
      this.criterias = dataType;
    });
  }
  getTrashedIndicatorList(){
    this._indicatorService.getTrash().subscribe(data =>{
      console.log("trash",data)
      this.trashIndicators = data;
    })
  }
  restoreFunction(id){
    this._indicatorService.restoreTrash(id).subscribe(data =>{
      console.log(data)
      location.reload();

    })
  }

  initEditForm(){
    this.editIndicator = new FormGroup({
      id:new FormControl(this.editableObj.id),
      name:new FormControl(this.editableObj.name),
      criteria_id:new FormControl(this.editableObj.criteria_id),
      is_positive :new FormControl(this.editableObj.is_positive == 1 ? true : false)
    });
  }

  modalEditRef: BsModalRef;
  openEditModal(selected,template: TemplateRef<any>){
    console.log("testing",selected)
    this.editableObj = selected;
    this.initEditForm();
    this.modalEditRef = this.modalService.show(template);
  }

  closeEditModal(){
    this.modalEditRef.hide();
    //this.initForm();
  }

  
  edit(value) {
    console.log("value",value)
    if(value.is_positive === true){
      value.is_positive = 1;
    }else{
      value.is_positive = 0;
    }
    this._indicatorService.editCriteria(value,this.editableObj.id)
      .subscribe(result => {
        console.log(result);
        this.modalEditRef.hide();
        if(result){
          this.alert.fireAlert("success","Data Updated successfully","");
          this.getIndicatorList();
          //this.initEditForm();
        }else{
          this.alert.fireAlert("error","There is an error when update this data","");
          this.getIndicatorList();
          //this.initEditForm();
        }
      });
  }


}
