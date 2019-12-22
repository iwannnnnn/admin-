import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterViewModel } from '../models/RegisterViewModel';
import { LoginViewModel, LoginRespoce } from '../models/LoginViewModel';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {


  public currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;
  constructor(private http: HttpClient) {
    super();
    this.apiURL = this.apiURL + 'api/users/';
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('loginToken'));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  register(request): Observable<{}> {

    return this.http.post(this.apiURL + 'register/', JSON.stringify(request), this.generateoptios());
  }
  get(userid) {
    return this.http.get(this.apiURL + userid + '/get/');
  }
  update(userid, request) {
    return this.http.post(this.apiURL + userid + '/update/', JSON.stringify(request), this.generateoptios()).subscribe(response => {
      console.log(response);
    });
  }


  delete(userid: any) {


    return this.http.delete(this.apiURL + userid + '/delete/', this.generateoptios()).subscribe(response => {
      console.log(response);
    });
  }
  getUsers(page: any, pagesize: any) {
    return this.http.get(this.apiURL + 'get-users/' + page + '/' + pagesize, this.generateoptios());
  }
  getUserProfuile(uesrid: string) {
    return this.http.get(this.apiURL + uesrid + '/get-profile', this.generateoptios());
  }

  login(request: LoginViewModel): Observable<LoginRespoce> {

    return this.http.post(this.apiURL + 'login/', JSON.stringify(request), this.generateoptios());
  }

  logout(): Observable<{}> {

    return this.http.post(this.apiURL + 'logout/', null, this.generateoptios());
  }
}
