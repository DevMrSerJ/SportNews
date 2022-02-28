import { Component, OnInit } from '@angular/core';

export interface Team {
  id: string;
  image: string;
  name: string;
  fullName: string;
  description: string;
  position: number;
  score: number;
}

@Component({
  selector: 'app-clubs-statistics',
  templateUrl: './clubs-statistics.component.html',
  styleUrls: ['./clubs-statistics.component.css']
})

export class ClubsStatisticsComponent implements OnInit {

  public teams: Team[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.teams.push(
      {
        id: "",
        image: "",
        name: "ЦСКА",
        fullName: "",
        description: "",
        position: 4,
        score: 35
      },
      {
        id: "",
        image: "",
        name: "Зенит",
        fullName: "",
        description: "",
        position: 1,
        score: 43
      },
      {
        id: "",
        image: "",
        name: "Динамо",
        fullName: "",
        description: "",
        position: 2,
        score: 40
      },
      {
        id: "",
        image: "",
        name: "Сочи",
        fullName: "",
        description: "",
        position: 3,
        score: 39
      }
    );
  }

}
