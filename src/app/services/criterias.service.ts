import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CriteriasService {
  private _apiUrl='http://localhost:8000/api/criteria';

  constructor(private _http: HttpClient) { }

  getCriteria() {
    return this._http.get(`${this._apiUrl}s`)
  }
  getCriteriaTypes(){
    return this._http.get('http://localhost:8000/api/criteriatypes');
  }
  deleteCriteria(id){
    return this._http.delete(`${this._apiUrl}/${id}`)
  }
  addCriteria(criteria){
    return this._http.post(this._apiUrl,criteria)
  }

  editCriteria(value,id){
    return this._http.put(`http://localhost:8000/api/criteria/${id}`,value);
  }
  getTrash(){
    return this._http.get(`${this._apiUrl}s/trash`)
  }
  restoreTrash(id){
    return this._http.get(`${this._apiUrl}/trash/${id}`)
  }
  getByRole(id, uid){
    return this._http.get(`${this._apiUrl}/role/${id}/${uid}`)
  }
}
