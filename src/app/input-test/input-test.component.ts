import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})

export class InputTestComponent {
  name : string = "";
  
  constructor(http : HttpClient){

  }

  printLog(value : any) : void {
    console.log(value);
  }
}
