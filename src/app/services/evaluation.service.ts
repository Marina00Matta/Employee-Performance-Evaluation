import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  
  private _apiUrl='http://localhost:8000/evaluation';
  constructor(private _http:HttpClient) { }

  storingEvaluationValue(evalution){
   return this._http.post(this._apiUrl , evalution);
  }
}
