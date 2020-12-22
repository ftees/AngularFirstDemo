import { Component,Input } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usname : String=localStorage.getItem('username');
  
  constructor(private router: Router,private ac: ActivatedRoute){
    this.usname = localStorage.getItem('username');
  }
  ngOninit(){
    
    console.log(this.usname);
  }
  remove(){
    localStorage.removeItem("username");
  }
  
  searchValue:string=''; 
  title = 'my-app';
  
  
  
}
