import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class APIService {
  private URL : string = "";
  constructor(private http : HttpClient) { }
}
