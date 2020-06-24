import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private _apiUrl='http://localhost:8000/api/role';

  constructor(private _http: HttpClient) { }

  getRoles(){
    return this._http.get(`${this._apiUrl}s`)
  }

  getRoleById(id){
    return this._http.get(`${this._apiUrl}/${id}`)
  }

  addRole(position){
    return this._http.post(this._apiUrl,position)
  }

  editRole(position,id){
    return this._http.put(`${this._apiUrl}/${id}`,position)
  }
}
