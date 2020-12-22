import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  username: string = "";
  ngOnInit(): void {
    console.log(this.username);
  }
  change(){
    console.log(this.username);
  }
  login(){
    localStorage.setItem('username', this.username);
  }
}
