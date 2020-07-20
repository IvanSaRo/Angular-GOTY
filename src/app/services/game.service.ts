import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment  } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGames(){

    return this.http.get(`${ environment.url}/api/goty`)
  }
}
