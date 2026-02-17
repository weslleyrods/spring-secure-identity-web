import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  public userData = signal<any>(null);
  public isAuthenticated = computed(() => !!this.userData());

  constructor() {
    const token = localStorage.getItem('token');
    if (token) this.decodeUser(token);
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password });
  }

  decodeUser(token: string) {
    try{
      return jwtDecode(token);
    }catch (error) {
      localStorage.removeItem('token');
      return null;
    }
  }

  setAuthenticated(token: string) {
    localStorage.setItem('token', token);
    const decoded = this.decodeUser(token);
    this.userData.set(decoded);
  }

}



