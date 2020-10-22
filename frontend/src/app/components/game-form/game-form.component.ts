import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/Games';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  edit: boolean=false;

  game: Game = {
    id: '',
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };
  
  constructor(private gameService: GamesService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGame(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.game = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGame() {
    this.gameService.saveGame(this.game).subscribe(
      res => {
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    )
  }

  updateGame() {
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id,this.game)
    .subscribe(
      res => {
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    )
  }
}
