import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from '../interfaces/viaje-interface';
import { retry } from 'rxjs/operators'; 
import { Observable } from 'rxjs';

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
  
  apiURL = 'https://Sebacaffi.github.io/data/db.json'

  constructor(public http: HttpClient) { }

  getAPI(){
    return this.http.get<Respuesta>(this.apiURL).pipe(
      retry(3)
    );
  }

  createViaje(conductor):Observable<any>{
    return this.http.post(this.apiURL+'viaje', conductor,this.httpOptions).pipe(
      retry(3)); 
  }
}