import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
    }
  
  

  apiURL = 'http://localhost:3000/viaje'

  constructor(private http: HttpClient) { }

  getAPI(){
    return this.http.get(this.apiURL);
  }
}
