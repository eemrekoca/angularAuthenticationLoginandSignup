import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  isim: string;
  email: string;
  password: string;

  signUp() {  
    this.authService.signUp(this.isim, this.email, this.password);
    
  }

}
