import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'http://localhost:3000/viaje'

  constructor(private http: HttpClient) { }

  getAPI(){
    return this.http.get(this.apiURL);
  }
}
