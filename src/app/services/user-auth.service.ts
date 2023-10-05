import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private apiBaseUrl = 'http://localhost:4200/';
  constructor(private http: HttpClient) { }
  login(identifier: string, password: string): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/auth/local`, { identifier, password });
  }
}
