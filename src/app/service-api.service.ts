import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  url1 = 'https://stage-api.ftnmethod.com/api/ti-technical-interview/psychologist/';
  url2 = "https://stage-api.ftnmethod.com/api/ti-technical-interview/coach/";
  url3 = 'https://stage-api.ftnmethod.com/api/ti-technical-interview/nutritionist/';

  constructor(private http:HttpClient) { }

  generarPsicologos():Observable<any>{
    return this.http.get(this.url1);
  }
  generarCoach():Observable<any>{
    return this.http.get(this.url1);
  }
  generarNutriologos():Observable<any>{
    return this.http.get(this.url1);
  }
}
