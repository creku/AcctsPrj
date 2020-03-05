import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public  authService:  AuthService) { }
  ngOnInit() {}

onSubmit(form:NgForm)
{

}
/*
login(email:string,pass:string)
{
  this.authService.SignIn(email,pass);
}

SignOut()
{
  this.authService.SignOut()
}*/

}
