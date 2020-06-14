import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { CriteriasService } from '../../../services/criterias.service';
import { FireAlertService } from 'src/app/services/fire-alert.service';
import { from } from 'rxjs';
import { RolesService } from '../../../services/roles.service';

@Component({
  selector: 'app-criteria-forms',
  templateUrl: './criteria-forms.component.html',
  styleUrls: ['./criteria-forms.component.css']
})
export class CriteriaFormsComponent implements OnInit {
  types;
  positions;
  constructor(private _criteriasService: CriteriasService,
    private route:ActivatedRoute ,
    private router:Router ,private alert:FireAlertService , 
    private roleservice:RolesService) { }

  ngOnInit(): void {
    this._criteriasService.getCriteriaTypes().subscribe(dataType =>{      
      this.types = dataType;
    });

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
