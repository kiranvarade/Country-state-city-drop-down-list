import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
private url="https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
  
constructor(private http:HttpClient) { }

public getAllCountries():Observable<any>{
       return this.http.get(this.url);  
  }
}
