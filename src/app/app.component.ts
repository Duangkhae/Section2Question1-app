import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl,Validators, ReactiveFormsModule } from '@angular/forms';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export class Model {

  constructor(
    public num1: number,
    public StrList:string,
    public StrStatus:string
    
  
  ) {  }

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  StrList =['isPrime','sFibanacci']
  model:Model =new Model(0,this.StrList[0],'true') ;
  functionnumber():void{
    if(this.model.num1<0){
      this.model.num1 =1;
    }else{
      this.model.num1 =  Math.round(this.model.num1);
    }
    

  }
  onChange(newValue:any):void{
    this.model.StrStatus=newValue;
    console.log('TT '+newValue);
    if(newValue==='isPrime'){
      this.model.StrStatus ='true';
      console.log('TT '+newValue);
    }else{

      this.model.StrStatus ='false';
      console.log('TT '+newValue);
    }
  }
}
