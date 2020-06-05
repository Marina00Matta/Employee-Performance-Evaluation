import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CriteriasService {
  private _apiUrl='http://localhost:8000/api/criteria';

  constructor(private _http: HttpClient) { }

  getCriteria() {
    //debugger
    return this._http.get(`${this._apiUrl}s`)
  }
  getCriteriaTypes(){
    return this._http.get('http://localhost:8000/api/criteriatypes');
  }
  deleteCriteria(id){
    return this._http.delete(`${this._apiUrl}/${id}`)
  }
}
