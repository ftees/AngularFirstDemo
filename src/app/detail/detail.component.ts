import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  phone:{
    id: String,
    name:String,
    brand:String,
    color:String,
    price:Number,
    description:String,
    cre_date:String,
    image:String
  }
  constructor(ac: ActivatedRoute, myservice:MyServiceService) { 
    ac.params.subscribe((p)=>{
      console.log(p);
      this.phone = myservice.getPhone().find((i)=>{return i.id == p.id});
    })
   }
  
  
  ngOnInit(): void {
  }

}
