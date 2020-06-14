import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { EvaluationService } from '../../../services/evaluation.service';
import { CriteriasService } from '../../../services/criterias.service';
import { UsersService } from '../../../services/users.service';
import { FireAlertService } from 'src/app/services/fire-alert.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {
  criterias;
   role_id:number ;
  user_id=sessionStorage.getItem('user_id');

  constructor(private criteriaService: CriteriasService,
              private route:ActivatedRoute ,
              private router:Router ,
              private evaluationService:EvaluationService,
              private _userservice:UsersService,private alert:FireAlertService) {}

  ngOnInit(): void {
    // this.route.params.subscribe(params =>{
    //   this.user_id = +params['id'];
    // });

    this.route.params.subscribe(params =>{
      this.role_id = +params['rid'];
    });

    // this._userservice.getUserById(this.user_id).subscribe(data=>{
    //   console.log('user',data['role']);
    //   this.role_id = data['role'];
    //   console.log(this.role_id);

    // });

    this.criteriaService.getByRole(this.role_id,this.user_id).subscribe(data=>{
      this.criterias=data;
      console.log(data);
      console.log(this.role_id);
      
    });
  }


  onSubmit(form: NgForm){
    if(form.valid){
      for (let key in form.value) {
        let eva ={
          user_id : this.user_id ,
          criteria_id : key ,
          value : form.value[key],
          evaluator_id : sessionStorage.getItem("user_id"),
        } ;
        this.evaluationService.storingEvaluationValue(eva).subscribe((res: any) =>{
          console.log(res);
          if(!res["error_message"]){
            this.alert.fireAlert("success","Data inserted successfully","");}
            else{
              this.alert.fireAlert("error",res["error_message"],"");}
        });
      }
    }
     form.reset;
     this.router.navigate(['/buttons/evaluation'])
    }
    }
