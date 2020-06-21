import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private _apiUrl='http://localhost:8000/api/group';
  constructor(private _http: HttpClient) { }

  getGroups() {
    return this._http.get(`${this._apiUrl}s`)
  }
  addGroup(group){
    return this._http.post(this._apiUrl,group)
  }
}
