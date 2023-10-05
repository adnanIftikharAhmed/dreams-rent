import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogINService {
  private apiBaseUrl = 'http://localhost:4200/';
  constructor(private http: HttpClient) { }
  login(obj:any) : Observable<any[]>{
    return this.http.post<any>("http://localhost:1337/api/auth/local", obj)
  }
  fetchProtectedResource() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get(`${this.apiBaseUrl}/some-protected-endpoint`, { headers: headers });
  }
  
}
