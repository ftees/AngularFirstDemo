import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
interface Phone{
  id: String,
  name:String,
  brand:String,
  color:String,
  price:Number,
  description:String,
  cre_date:String,
  image:String
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list:Phone[];
  list2:Phone[] = [];
  list3:Phone[] = [];
  constructor(private service:MyServiceService) {

   }
  
  ngOnInit(): void {
     this.list = this.service.getPhone();
     this.list.sort((a, b) => (a.cre_date < b.cre_date) ? 1 : -1)
     for(var i=0;i<4;i++){
        this.list2.push(this.list[i]);
     }
     for(var k=this.list.length-5;k<this.list.length-1;k++){
       this.list3.push(this.list[k]);
     }
  }

}
