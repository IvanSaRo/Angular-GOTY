import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { Game } from "../../interfaces/interfaces"

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {
  games: Game[] = [];
  
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames()
        .subscribe( resp => {
          this.games = resp;
          console.log(this.games);

        })

  }

}
