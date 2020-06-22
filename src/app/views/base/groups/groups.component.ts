import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups;
  constructor(private _groupService:GroupService,
    private route:ActivatedRoute ,
    private router:Router) { }

  ngOnInit(): void {
     
  }
 
   onSubmit(form: NgForm){
      if(form.valid){
      console.log(form.value);
      this._groupService.addGroup(form.value).subscribe((res: any)=>{
        console.log(res);
      });
      form.reset();
      this.router.navigate(['/base/Users']);
      }
    }

  

}
