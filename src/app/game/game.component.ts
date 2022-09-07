import { GameService } from './../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  response:any;
  get = true;
  message = '';

  constructor(private service:GameService) { }

  ngOnInit(): void {
  }

  requestData(){
    this.service.getData().subscribe({
      next: data =>{
       this.response = data;
       this.get = true;
      },
      error: error => this.message = error,
      complete: () => this.message = "Request completed"
    });
  }

}
