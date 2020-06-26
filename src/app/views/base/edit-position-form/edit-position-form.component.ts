import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RolesService } from '../../../services/roles.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-edit-position-form',
  templateUrl: './edit-position-form.component.html',
  styleUrls: ['./edit-position-form.component.css']
})
export class EditPositionFormComponent implements OnInit {
  roles;
  role_id;
  role;
  selectedElement;
  constructor(private _rolesService: RolesService,
    private route:ActivatedRoute ,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.role_id = +params['id'];
      }); 
    this._rolesService.getRoles().subscribe(data =>
      {this.roles =data;
      });
    this._rolesService.getRoleById(this.role_id).subscribe(data=>
      {this.role = data;
        this.selectedElement = this.roles[1];
        console.log('ele',this.selectedElement);
      });
    //  this.selectedElement= [
    //     {id:1,name:'admin'},
    //     {id:2,name:'manager'}];  
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    if(form.valid)
    {this._rolesService.editRole(form.value, this.role_id).subscribe((res :any) =>{
      console.log(res);
    });
    }
    form.reset;
    this.router.navigate(['/base/positions']);
    
  }

  

}
