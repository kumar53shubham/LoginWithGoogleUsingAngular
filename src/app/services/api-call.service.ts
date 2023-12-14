import { SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }

  loginWithGoogle(user:SocialUser){
    return this.http.post(`http://localhost:8086/auth/google`,user)
  }
}
