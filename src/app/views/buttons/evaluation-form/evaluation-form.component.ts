import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { EvaluationService } from '../../../services/evaluation.service';
import { CriteriasService } from '../../../services/criterias.service';
import { UsersService } from '../../../services/users.service';
import { FireAlertService } from 'src/app/services/fire-alert.service';
import { element } from 'protractor';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {
  criterias;
   role_id:number ;
  user_id:number;
  evaluator_id= sessionStorage.getItem("user_id");
  constructor(private criteriaService: CriteriasService,
              private route:ActivatedRoute ,
              private router:Router ,
              private evaluationService:EvaluationService,
              private _userservice:UsersService,private alert:FireAlertService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.user_id = +params['id'];
    });


    // this.route.params.subscribe(params =>{
    //   this.role_id = +params['rid'];
    // });

    this.criteriaService.getByRole(this.evaluator_id,this.user_id).subscribe(data=>{
    
      console.log(this.user_id  , this.evaluator_id);

      // if(this.role_id == 4 || this.role_id == 7){
      //   for (let ele in data){
      //     if (data[ele].type_id == 3){
      //       this.criterias = [];
      //       this.criterias.push(data[ele]);
      //     }
      //     else{
      //       this.criterias = data;
      //     }
      //   }
      // }else{
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
      form.reset;
      this.router.navigate(['/buttons/evaluation'])
    }
 
    }
    }
