import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class User {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  register(name: string, email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/users`, { name, email, password });
  }



}
