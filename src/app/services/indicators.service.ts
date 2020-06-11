import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  private _apiUrl='http://localhost:8000/api/indicator';
  constructor(private _http: HttpClient) { }

  getIndicators(){
    return this._http.get(`${this._apiUrl}s`)
  }

  getIndicatorsById(id){
    return this._http.get(`${this._apiUrl}/${id}`)
  }
  deleteIndicator(id){
    return this._http.delete(`${this._apiUrl}/${id}`)
  }

  addIndicator(indicator){
    return this._http.post(this._apiUrl,indicator)
  }

  editCriteria(value,id){
    console.log("value",value)
    console.log("id",id)
    return this._http.put('http://localhost:8000/api/indicator/'+id,value);
  }
  getTrash(){
    return this._http.get(`${this._apiUrl}s/trash`)
  }
  restoreTrash(id){
    return this._http.get(`${this._apiUrl}/trash/${id}`)
  }
}
