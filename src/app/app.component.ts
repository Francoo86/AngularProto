import { Component, OnInit } from '@angular/core';
import { APIService } from './api.service';
import { SelectableTypes } from './objects/selectable-types';
import { StringHelpers } from './utility/string-helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "<h1>hello</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Nuevo titulo i guess';
  selectables? : SelectableTypes;

  constructor(private apiServ : APIService) {
    this.printSelectables();
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

  printCharacter(character : string) : void {
    character = StringHelpers.makeSuitable(character);
  
    alert(character);
  }
}
