import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'somediv',
  templateUrl: './somediv.component.html',
  styleUrls: ['./somediv.component.css']
})

export class SomedivComponent implements OnInit {
  ngOnInit(): void {
      alert("Estoy empezando uhm aha")
  }
}
