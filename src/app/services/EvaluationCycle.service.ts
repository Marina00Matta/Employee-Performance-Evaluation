import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EvaluationCycleService {
  private URL='http://localhost:8000/api/evaluation_cycles';

  constructor(private http: HttpClient) { }

  getEvaluationCycle() {
    //debugger
    return this.http.get(`${this.URL}`)
  }

  saveEvaluationCycle(value){
    return this.http.post('http://localhost:8000/api/evaluation_cycle',value);
  }

  editEvaluationCycle(value,id){
    console.log("value",value)
    console.log("id",id)
    return this.http.put('http://localhost:8000/api/evaluation_cycle/'+id,value);
  }

  deleteEvaluationCycle(id){
    return this.http.delete('http://localhost:8000/api/evaluation_cycle/'+id);
  }


  getEvaluationCycleById(id){
    return this.http.get('http://localhost:8000/api/evaluation_cycle/'+id);
  }
  
}
