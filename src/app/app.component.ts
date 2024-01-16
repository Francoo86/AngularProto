import { Component, OnInit } from '@angular/core';
import { APIService } from './api.service';
import { SelectableTypes } from './objects/selectable-types';
import { StringHelpers } from './utility/string-helpers';
import { Character } from './objects/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "<h1>hello</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Nuevo titulo i guess';
  selectables? : SelectableTypes;
  character? : Character;

  constructor(private apiServ : APIService) {
    this.printSelectables();
    this.fetchAllCharacters();
  }

  printSelectables() : void  {
    this.apiServ.getSelectableData().subscribe(
      (resp) => {
        console.log(resp);
        this.selectables = resp;

        if (this?.selectables?.types && this.selectables.types.length > 0) {
          console.log("the selectable: ", this.selectables.types[0]);
        }
      }
    )
  }

  fetchCharacter(character : string) : void {
    character = StringHelpers.makeSuitable(character);
    
      this.apiServ.getCharacterInfo(character).subscribe({
        next: (resp) => {
          this.character = resp;

          console.log(this.character);
        },

        error: () => {
            console.log(`Can't fetch the character: ${character}`);
        }
      }
    )
  }

  fetchAllCharacters() : void {
    this.apiServ.getAllCharacters().subscribe({
      next: (resp) => {
        const allCharacters : Character[] = resp; 

        allCharacters.forEach(char => {
          console.log(char?.name);
        });
      }
    })
  }
}
