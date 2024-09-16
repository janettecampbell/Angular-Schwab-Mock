import { Injectable } from '@angular/core';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoginRequest } from '../../interfaces/login-request';
import { AuthResponse } from '../../interfaces/auth-response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  BASE_URL = 'http://localhost:5065';

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.BASE_URL}/login`, data).pipe(
      map((response: any) => {
        if (response.isSuccess) {
          localStorage.setItem(this.tokenKey, response.token);
        }
        return response;
      })
    );
  }
}
