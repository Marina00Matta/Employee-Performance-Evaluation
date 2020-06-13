import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { EvaluationService } from '../../../services/evaluation.service';
import { CriteriasService } from '../../../services/criterias.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {
  criterias;
   role_id:number ;
  user_id:number;

  constructor(private criteriaService: CriteriasService,
              private route:ActivatedRoute ,
              private router:Router ,
              private evaluationService:EvaluationService,
              private _userservice:UsersService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.user_id = +params['id'];
    });
    this._userservice.getUserById(this.user_id).subscribe(data=>{
      console.log('user',data['role']);
      this.role_id = data['role'];

    });

    this.criteriaService.getByRole(8).subscribe(data=>{
      this.criterias=data;
      console.log(data);
      
    });
  }


  onSubmit(form: NgForm){
    if(form.valid){
      for (let key in form.value) {
        let eva ={
          user_id : this.user_id ,
          criteria_id : key ,
          value : form.value[key],
        } ;
        this.evaluationService.storingEvaluationValue(eva).subscribe((res: any) =>{
          console.log(res);
        });
      }
    }
     form.reset;
     this.router.navigate(['/buttons/evaluation'])
  }
}
