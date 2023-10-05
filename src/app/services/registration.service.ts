import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  register(obj:any) : Observable<any[]>{
    return this.http.post<any>("http://localhost:1337/api/auth/local/register", obj)
  }
  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
