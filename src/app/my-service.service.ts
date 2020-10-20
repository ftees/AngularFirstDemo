import { Injectable } from '@angular/core';
import Phone from './phone.json';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  getPhone(){
    return Phone;
  }
}
