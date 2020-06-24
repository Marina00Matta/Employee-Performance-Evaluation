import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _apiUrl='http://localhost:8000/api/user';

  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get(`${this._apiUrl}s`)
  }

  getUserById(id){
    return this._http.get(`${this._apiUrl}/${id}`)
  }
  
  deleteUser(id){
    return this._http.delete(`${this._apiUrl}/${id}`)
  }

  addUser(user){
    return this._http.post<any>(this._apiUrl,user)
  }
  editUser(id,user){
    return this._http.put(`${this._apiUrl}/${id}`,user)
  }

  getUserByRole(role,uid){
    return this._http.get(`${this._apiUrl}s/${role}/${uid}`)
  }
  getTrash(){
    return this._http.get(`${this._apiUrl}s/trash`)
  }
  restoreTrash(id){
    return this._http.get(`${this._apiUrl}/trash/${id}`)
  }
}
