import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { Character } from '../objects/character';

@Component({
  selector: 'input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css'],
  providers: [APIService],
})

export class InputTestComponent {
  name : string = "";
  avalaibleCharacters : string[] = [];
  
  constructor(private apiServ : APIService){
    this.initializeCharacters();
  }

  //we should fetch.
  //if this thing has at least 100 characters this would be expensive af.
  initializeCharacters() : void {
    this.apiServ.getAllCharacters().subscribe({
      next: (resp) => {
        const receivedChars : Character[] = resp;

        receivedChars.forEach(char => {
          this.avalaibleCharacters.push(char.name);
        });
      }
    })
  }

  printLog(value : any) : void {
    console.log(value);
    console.log(this.avalaibleCharacters);
  }
}
