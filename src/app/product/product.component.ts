import { summaryForJitName } from '@angular/compiler/src/aot/util';
import { Component, Input, OnInit } from '@angular/core';
import { Route,ActivatedRoute,Params } from '@angular/router';
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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  p:number = 1;
  phoneList:Phone[];
  constructor(private ac:ActivatedRoute,private myservice: MyServiceService) {
   
   }
  value:string;
  searchValue:any=" ";
  search(s){
    this.searchValue = s.target.value;
  }
  ngOnInit(): void {
    this.phoneList = this.myservice.getPhone();
    this.value = this.ac.snapshot.paramMap.get('brand');
    console.log(this.searchValue);
    if(this.value == 'all'){
      this.phoneList = this.myservice.getPhone();
    }
    else{
      this.ac.params.subscribe((p)=>{
        this.phoneList = this.myservice.getPhone().filter((i)=>{return i.brand == this.value});
      })
     }
     
     }
     sortName(){
        this.phoneList= this.myservice.getPhone().sort((a,b)=>(a.name < b.name ? -1 : 1));
    }
    }
    
    
  


