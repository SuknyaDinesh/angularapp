import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api_url;
  constructor(private http: HttpClient) { 
    this.api_url = env.API_URL;
  }
  get_userlist(){
    return this.http.get(`${this.api_url}user?limit=10&current_page=0`);
  }
}
