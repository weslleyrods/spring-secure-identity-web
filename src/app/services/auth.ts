import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  isAuthenticated = signal<boolean>(!!localStorage.getItem('token'));

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password });
  }

  setAuthenticated(token: string) {
    localStorage.setItem('token', token);
    this.isAuthenticated.set(true);
  }

}
