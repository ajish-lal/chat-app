import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/common/user.service';

@Component({
  selector: 'chat-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  userName = '';
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}
