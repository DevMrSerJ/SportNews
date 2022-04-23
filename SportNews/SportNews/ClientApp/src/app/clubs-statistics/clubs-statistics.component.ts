import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Team {
  id: string;
  image: string;
  name: string;
  fullName: string;
  description: string;
  position: number;
  score: number;
}

export interface ClubStatisticsInfo {
  teamsUp: Team[],
  teamsDown: Team[],
  title: string,
  titleUpTable: string,
  titleDownTable: string
}

@Component({
  selector: 'app-clubs-statistics',
  templateUrl: './clubs-statistics.component.html',
  styleUrls: ['./clubs-statistics.component.css']
})

export class ClubsStatisticsComponent implements OnInit {

  @Input()
  public statisticsInfo: ClubStatisticsInfo | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickReferense(id: string): void {
    this.router.navigateByUrl('/club', {
      state: {
        id: id,
        isClub: true
      }
    });
  }

}
