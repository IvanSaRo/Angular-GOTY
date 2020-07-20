import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment  } from "../../environments/environment";
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [];

  constructor(private http: HttpClient) { }

  getGames(){
    if( this.games.length > 0){
      //no hay juegos
     console.log("desde el caché");
      return of(this.games)//lo devuelve como observable que es lo que pide el componente goty;
    }else{
      console.log("desde internet");
      return this.http.get<Game[]>(`${ environment.url}/api/goty`)
        .pipe(
          tap(
            resp => this.games = resp
          )
          )

    }
  }

  vote(id: string){

    return this.http.post(`${ environment.url }/api/goty/${ id }`, {}/* body vacío */)
  }
}
