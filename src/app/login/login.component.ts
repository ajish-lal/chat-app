import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'chat-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    userNameEmail: ['', Validators.required],
    password: ['', Validators.required]
  });

  signIn() {
    if (this.loginForm.valid && this.userService.authenticateUser(this.loginForm.value)) {
      this.router.navigateByUrl('/chat-window');
    }
  }

}
