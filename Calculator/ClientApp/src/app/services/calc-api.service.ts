import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { getBaseUrl } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class CalcApiService {
  private baseUrl: string = 'https://localhost:44319/api';
  constructor(private http: HttpClient) { }




  calculate(expression: string): Observable<string> {
    return this.http.get<string>(`api/calculator?expression=${expression}`);
  }
}
