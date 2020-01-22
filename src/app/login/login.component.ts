import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  email: string;
  password: string;

  ngOnInit() {
  }
  signIn() {
    this.authService.signIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

}
