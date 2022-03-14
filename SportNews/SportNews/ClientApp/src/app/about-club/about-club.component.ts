import { Component, OnInit } from '@angular/core';
import { Team } from '../clubs-statistics/clubs-statistics.component';

@Component({
  selector: 'app-about-club',
  templateUrl: './about-club.component.html',
  styleUrls: ['./about-club.component.css']
})
export class AboutClubComponent implements OnInit {

  public teams: Team[] = [
    {
      id: "F5E24105-DF3C-448C-9A07-E785103B2350",
      image: "../../assets/images/CSKA.webp",
      name: "ЦСКА",
      fullName: "Профессиональный футбольный клуб ЦСКА Москва.",
      description: "",
      position: 1,
      score: 38
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
