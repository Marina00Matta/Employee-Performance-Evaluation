import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CriteriaType } from 'src/app/interfaces/CriteriaType';
import { Criteria } from 'src/app/interfaces/Criteria';
import { CriteriasService } from '../../../services/criterias.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FireAlertService } from 'src/app/services/fire-alert.service';
import { ActivatedRoute , Router} from '@angular/router';
import { GroupService } from '../../../services/group.service';
import { RolesService } from '../../../services/roles.service';




@Component({
  selector: 'app-criterias',
  templateUrl: './criterias.component.html'
})
export class CriteriasComponent implements OnInit {
  criterias;
  trashCriterias;
  types; 
  grps;
  roles=[];
  editableCriteriaObj : Criteria;
  editCriteria : FormGroup;
  constructor(private _criteriasService: CriteriasService,private modalService: BsModalService,
    private alert:FireAlertService, private route:ActivatedRoute ,
    private router:Router ,
private _grpService:GroupService,
private _rolesService: RolesService,) { }

  ngOnInit(): void {
    this.getCriteriaList();
    this.getCriteriaTypeList();
    this.getGroups();
    this.getRoles();

  }
  getCriteriaTypeList(){
    this._criteriasService.getCriteriaTypes().subscribe(dataType =>{
      console.log(dataType)
      this.types = dataType;
    })
  }
  getGroups(){
    this._grpService.getGroups().subscribe(data =>{
      this.grps = data ;
    })
  }
  getRoles(){
    this._rolesService.getRoles().subscribe(data =>
      { 
        for (let ele in data) {          
          if(data[ele].name !== 'superadmin')
           {
            this.roles.push(data[ele]);
           }
        }        
      });
   
  }

  deleteFunction(id){
    this._criteriasService.deleteCriteria(id).subscribe(()=>{console.log('deleted');

    });
    console.log(id);
    this.getCriteriaList();    
  }
  getCriteriaList(){
    this._criteriasService.getCriteria().subscribe(data =>{
      console.log(data)
      this.criterias = data;
    })
  }
  
  initEditForm(){
    this.editCriteria = new FormGroup({
      id:new FormControl(this.editableCriteriaObj.id),
      name:new FormControl(this.editableCriteriaObj.name),
      type_id:new FormControl(this.editableCriteriaObj.type_id),
      group_id:new FormControl(this.editableCriteriaObj.group_id),
      roles:new FormControl(this.editableCriteriaObj.roles),
    });
  }

  modalEditRef: BsModalRef;
  openEditModal(selected,template: TemplateRef<any>){
    console.log("testing",selected)
    this.editableCriteriaObj = selected;
    this.initEditForm();
    this.modalEditRef = this.modalService.show(template);
  }

  closeEditModal(){
    this.modalEditRef.hide();
  }

  
  edit(value) {
    
    console.log("value",value)
    this._criteriasService.editCriteria(value,this.editableCriteriaObj.id)
      .subscribe(result => {
        console.log(result);
        this.modalEditRef.hide();
        if(result){
          this.alert.fireAlert("success","Data Updated successfully","");
          this.getCriteriaList();
          //this.initEditForm();
        }else{
          this.alert.fireAlert("error","There is an error when update this data","");
          this.getCriteriaList();
          //this.initEditForm();
        }
      });
  
  }
      get name(){return this.editCriteria.get('name');}

      get type_id(){return this.editCriteria.get('type_id');}
    
  }


  


