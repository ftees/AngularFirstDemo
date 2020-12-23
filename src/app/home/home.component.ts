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
interface Order{
  id: number,
  customer: String,
  product: String,
  brand: String,
  quantity: Number,
  img:  String,
  price: number
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
  listOrder:Order[] = [];
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
     console.log(this.listOrder);
  }

  addCart(name, brand,price,img){
      var order= {
      id: Math.floor(Math.random() * 1001),
      customer: localStorage.getItem("username"),
      product: name,
      brand: brand,
      quantity: 1,
      img:  img,
      price: price
    }
    console.log(JSON.stringify(order));
    this.listOrder = JSON.parse(localStorage.getItem("listCart"));
    this.listOrder.push(order);
    localStorage.setItem("listCart",JSON.stringify(this.listOrder));
      
  }

}
