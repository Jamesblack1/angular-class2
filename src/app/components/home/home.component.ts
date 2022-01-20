import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home', // es la etiqueta por la cual llamamos nuestro componente
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { } 

  ngOnInit(): void {
    
  }

}
