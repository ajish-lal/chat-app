import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: any = [{ userName: 'admin', password: 'admin' }];

  constructor() { }

  addUser(payload: any) {
    this.userList.push(payload);
  }

  authenticateUser(payload: any) {
    console.log(payload)
    if (this.userList.find((elem: any) => {
      return (elem.userName === payload.userNameEmail || elem.email === payload.userNameEmail)
        && elem.password === payload.password
    })) {
      return true;
    } else
      return false;
  }
}
