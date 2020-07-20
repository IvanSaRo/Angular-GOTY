import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Game } from 'src/app/interfaces/interfaces';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  games: any[] = [];

  constructor( private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
        .pipe(
          map( (resp: Game[]) =>  resp.map(({ name, votes}) => ({ name, value: votes}))
          )
        ) 
        .subscribe( games => {
          this.games = games;
        })
  }

}
