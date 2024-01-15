import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEnvironment, environment} from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

//Yes this loads first.
export class APIService {
  constructor(private http : HttpClient) { 
    console.log((environment as IEnvironment).API_URL);
  }
}
