import { Component, Input, OnInit } from '@angular/core';

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

  @Input()
  public teamsUp: Team[] = [];

  @Input()
  public teamsDown: Team[] = [];

  @Input()
  public title: string = "";

  @Input()
  public titleUpTable: string = "";

  @Input()
  public titleDownTable: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
