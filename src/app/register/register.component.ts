import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'chat-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    // this.registerForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  registerForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  saveAndNavigate() {
    if (this.registerForm.valid) {
      if (this.registerForm.controls['password'].value === this.registerForm.controls['confirmPassword'].value) {
        this.userService.addUser(this.registerForm.value);
        this.router.navigateByUrl('/login');
      } else {
        this.registerForm.controls['confirmPassword'].setErrors({ incorrect: true });
      }
    }
  }

}
