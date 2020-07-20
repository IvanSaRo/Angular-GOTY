import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";

import { Game } from "../../interfaces/interfaces";

import Swal from 'sweetalert2';

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

  vote(game: Game){
    
    this.gameService.vote( game.id)
        .subscribe( (resp: {ok: boolean, message: string}) => {
          if (resp.ok){
            Swal.fire("Voto registrado", resp.message, "success");
          }else {
            Swal.fire("Ups", resp.message, "error");
          }




        })
  }

}
