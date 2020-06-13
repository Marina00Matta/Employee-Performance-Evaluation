import { Component, OnInit ,TemplateRef} from '@angular/core';
import { EvaluationCycleService } from '../../../services/EvaluationCycle.service';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 
import { FireAlertService } from 'src/app/services/fire-alert.service';
import {EvaluationCycle} from 'src/app/interfaces/EvaluationCycle';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-EvaluationCycle',
    templateUrl: './EvaluationCycle.component.html',
    styleUrls: ['./EvaluationCycle.component.css']
  })
export class EvaluationCycleComponent implements OnInit{

  newEvaluationCycle : FormGroup;
  editEvaluationCycle : FormGroup;
  evaluationCycleList;
  editableObj : EvaluationCycle;
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  constructor(private evaluationCycleService: EvaluationCycleService,private modalService: BsModalService,
    private alert:FireAlertService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getEvaluationCycleList();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.initForm();
  }

  initForm(){
    this.newEvaluationCycle = new FormGroup({
      start: new FormControl('',[Validators.required]),
      end: new FormControl(''),
      cycle: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")])
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

  get start(){return this.newEvaluationCycle.get('start');}

  get cycle(){return this.newEvaluationCycle.get('cycle');}
}