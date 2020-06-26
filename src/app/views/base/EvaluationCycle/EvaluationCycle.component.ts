import { Component, OnInit ,TemplateRef,ViewChild} from '@angular/core';
import { EvaluationCycleService } from '../../../services/EvaluationCycle.service';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 
import { FireAlertService } from 'src/app/services/fire-alert.service';
import {EvaluationCycle} from 'src/app/interfaces/EvaluationCycle';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { CustomValidator } from '../../../validators/CustomValidator';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
    selector: 'app-EvaluationCycle',
    templateUrl: './EvaluationCycle.component.html',
    styleUrls: ['./EvaluationCycle.component.css']
  })
export class EvaluationCycleComponent implements OnInit{

  @ViewChild(DatatableComponent) myFilterTable: DatatableComponent;
  

  newEvaluationCycle : FormGroup;
  editEvaluationCycle : FormGroup;
  evaluationCycleList;
  temp;
  editableObj : EvaluationCycle;
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = moment(new Date()).format('YYYY-MM-DD');
  columns: Array<object>;
  
  //maxDate= moment(new Date()).format('YYYY-MM-DD');
  myDate;
  constructor(private evaluationCycleService: EvaluationCycleService,private modalService: BsModalService,
    private alert:FireAlertService,private datePipe: DatePipe) { 
      this.myDate = new Date();
    }

  ngOnInit(): void {
    this.getEvaluationCycleList();
    this.initForm();
  }

  initForm(){
    this.newEvaluationCycle = new FormGroup({
      start: new FormControl(this.minDate,[Validators.required]),
        //Validators.min(moment(new Date()).millisecond()),Validators.max(moment(new Date()).millisecond())]),
      end: new FormControl(''),
      cycle: new FormControl('',[Validators.required, CustomValidator.numeric])
    });
  }

  initEditForm(){
    let date = this.datePipe.transform(new Date(this.editableObj.start), 'yyyy-MM-dd');
    this.editEvaluationCycle = new FormGroup({
      id: new FormControl(this.editableObj.id),
      start: new FormControl(date),
      end: new FormControl(this.editableObj.end),
      cycle: new FormControl(this.editableObj.cycle),
      is_current: new FormControl(this.editableObj.is_current)
    });
  }

  modalRef: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  save(value) {
    if(this.newEvaluationCycle.valid)
    {
      this.evaluationCycleService.saveEvaluationCycle(value)
        .subscribe(result => {
          console.log(result);
          this.modalRef.hide();
        if(!result["error_message"]){
            this.alert.fireAlert("success","Data inserted successfully","");
            this.getEvaluationCycleList();
            this.initForm();
          }else{
            this.alert.fireAlert("error",result["error_message"],"");
            this.getEvaluationCycleList();
            this.initForm();
          }
        });
    }else{
      this.alert.fireAlert("error","Please Complete all data in form","");
    }

  }

  edit(value) {
   
    console.log("value",value)
    console.log("id",this.editableObj.id)
    this.evaluationCycleService.editEvaluationCycle(value,this.editableObj.id)
      .subscribe(result => {
        console.log(result);
        this.modalEditRef.hide();
        if(result){
          this.alert.fireAlert("success","Data Updated successfully","");
          this.getEvaluationCycleList();
          this.initEditForm();
        }else{
          this.alert.fireAlert("error","There is an error when update this data","");
          this.getEvaluationCycleList();
          this.initEditForm();
        }
      });
    
  }

  delete(id){
      this.evaluationCycleService.deleteEvaluationCycle(id)
      .subscribe(result => {
        console.log(result);
        if(result){
          this.alert.fireAlert("success","Data deleted successfully","");
          this.getEvaluationCycleList();
        }else{
          this.alert.fireAlert("error","There is an error when delete this data","");
          this.getEvaluationCycleList();
        }
      });
  }
  
  getEvaluationCycleList(){
      this.evaluationCycleService.getEvaluationCycle().subscribe(data =>{
        console.log(data)
        this.temp = data;
        this.evaluationCycleList = data;
      })
  }

  closeModal(){
    this.modalRef.hide();
    this.initForm();
  }
  
  closeEditModal(){
    this.modalEditRef.hide();
    this.initForm();
  }

  modalEditRef: BsModalRef;
  openEditModal(selected,template: TemplateRef<any>){
    console.log("testing")
    this.editableObj = selected;
    this.initEditForm();
    this.modalEditRef = this.modalService.show(template);
  }

  updateFilter(event) {
    const val = event.target.value.toString().toLowerCase().trim();
    // filter our data
    const temp = this.temp.filter(function (d) {
      console.log("d",d)
      return (d.cycle.toString().toLowerCase().indexOf(val) !== -1 ) ||
      (d.is_current.toString().toLowerCase().indexOf(val) !== -1 ) ||
      (d.start.toString().toLowerCase().indexOf(val) !== -1 ) ||
      (d.end.toString().toLowerCase().indexOf(val) !== -1 ) 
      || !val;
    });
    // update the rows
    this.evaluationCycleList = temp;
    // Whenever the filter changes, always go back to the first page
    this.myFilterTable.offset = 0;
  }

  get start(){return this.newEvaluationCycle.get('start');}

  get cycle(){return this.newEvaluationCycle.get('cycle');}

  get startedit(){return this.editEvaluationCycle.get('start');}

  get cycleedit(){return this.editEvaluationCycle.get('cycle');}
}