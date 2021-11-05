import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta, Viaje } from '../interfaces/viaje-interface';

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
  
  apiURL = 'http://Sebacaffi.github.io/data/db.json'

  constructor(private http: HttpClient) { }

  getAPI(){
    return this.http.get<Respuesta>(this.apiURL);
  }
}