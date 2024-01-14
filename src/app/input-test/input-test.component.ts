import { Component } from '@angular/core';

@Component({
  selector: 'input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})

export class InputTestComponent {
  name : string = "";
  
  printLog(value : any) : void {
    console.log(value);
  }
}
