import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEnvironment, environment} from 'src/environments/environment.development';
import { SelectableTypes } from './objects/selectable-types';
import { Character } from './objects/character';

@Injectable({
  providedIn: 'root'
})

//Yes this loads first.
export class APIService {
  private url : string = (environment as IEnvironment).API_URL;
  constructor(private http : HttpClient) { 
    console.log((environment as IEnvironment).API_URL);
  }

  private lastData : any = null;
  private CHARACTERS_URL = this.url + "characters/";

  getSelectableData() {
    return this.http.get<SelectableTypes>(this.url);
  }

  getCharacterInfo(charName : string) {
    return this.http.get<Character>(this.CHARACTERS_URL + charName);
  }

  getAllCharacters() {
    return this.http.get<Character[]>(this.CHARACTERS_URL + "all");
  }
}
