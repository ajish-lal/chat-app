import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: any = [{ userName: 'admin', password: 'admin' }];

  constructor(private http: HttpClient) { }

  fetchUsers() {
    let page1 = this.http.get('https://reqres.in/api/users?page=1');
    let page2 = this.http.get('https://reqres.in/api/users?page=2');
    return forkJoin([page1, page2]);
  }

  addUser(payload: any) {
    this.userList.push(payload);
  }

  authenticateUser(payload: any) {
    if (this.userList.find((elem: any) => {
      return (elem.userName === payload.userNameEmail || elem.email === payload.userNameEmail)
        && elem.password === payload.password
    })) {
      sessionStorage.setItem('isLoggedIn', 'true');
      return true;
    } else {
      sessionStorage.setItem('isLoggedIn', 'false');
      return false;
    }
  }

  logout() {
    sessionStorage.setItem('isLoggedIn', 'false');
  }
}
