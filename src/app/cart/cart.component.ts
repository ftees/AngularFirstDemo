import { Component, OnInit } from '@angular/core';
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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor() { }
  listOrder: Order[] = [];
  ngOnInit(): void {
      this.listOrder = JSON.parse(localStorage.getItem("listCart"));


}
}
