import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})

//We pass from the parent stuff.
export class CharacterInfoComponent {
  //Receive from parented components...
  @Input() characters : string[] = [];

}
