import { Component } from '@angular/core';
import { LoggerService } from "./services/logger.service";
import { GamesService } from "./services/games.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Curso Angular';
  tecnologias:string = "angular"
  
  constructor(private logger:LoggerService, private gamesService:GamesService){

  }

  verData(){
    console.log("Ver Data");
    this.logger.methodExample();
    try {
      this.logger.log("Iniciando metodo ver Data")
      console.log(this.gamesService.getGames());
    } catch (error) {
      this.logger.error(error);      
    }
  }

  verMethod(){
    let name = "Jaime";

    this.title = "otra cosa";
  }


  
}
