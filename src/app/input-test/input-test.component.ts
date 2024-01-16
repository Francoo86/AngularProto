import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css'],
  providers: [APIService],
})

export class InputTestComponent {
  name : string = "";
  
  constructor(apiServ : APIService){

  }

  printLog(value : any) : void {
    console.log(value);
  }
}
