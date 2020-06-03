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
}
