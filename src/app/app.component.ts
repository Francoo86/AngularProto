import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: "<h1>hello</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Nuevo titulo i guess';
  key : string = process.env["API_KEY"] || "NO_KEY";
}
