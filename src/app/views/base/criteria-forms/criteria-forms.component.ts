import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { CriteriasService } from '../../../services/criterias.service';
import { FireAlertService } from 'src/app/services/fire-alert.service';
import { from } from 'rxjs';
import { RolesService } from '../../../services/roles.service';
import { GroupService } from '../../../services/group.service';

@Component({
  selector: 'app-criteria-forms',
  templateUrl: './criteria-forms.component.html',
  styleUrls: ['./criteria-forms.component.css']
})
export class CriteriaFormsComponent implements OnInit {
  types;
  positions;
  groups;
  constructor(private _criteriasService: CriteriasService,
    private route:ActivatedRoute ,
    private router:Router ,private alert:FireAlertService , 
    private roleservice:RolesService ,
    private _grpService:GroupService) { }

  ngOnInit(): void {
    this._criteriasService.getCriteriaTypes().subscribe(dataType =>{      
      this.types = dataType;
    });

    this._grpService.getGroups().subscribe(data =>{
      this.groups = data ;
    })

    this.roleservice.getRoles().subscribe(roles => {
      this.positions=roles ;
      console.log(roles);
      
    });

  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log(form.value);
      this._criteriasService.addCriteria(form.value).subscribe((res: any)=>{
        console.log(res);
        if(res["errors"] && res["errors"]["name"]){
          this.alert.fireAlert("error",res["errors"]["name"][0],"");
        }
    });
    form.reset();
    this.router.navigate(['/base/criteria'])
    }
  }

}
