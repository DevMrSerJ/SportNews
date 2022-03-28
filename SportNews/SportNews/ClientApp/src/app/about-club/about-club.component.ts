import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../clubs-statistics/clubs-statistics.component';
import { User } from '../page-club/page-club.component';

@Component({
  selector: 'app-about-club',
  templateUrl: './about-club.component.html',
  styleUrls: ['./about-club.component.css']
})
export class AboutClubComponent implements OnInit {

  @Input() user: User | undefined;
  @Input() team: Team | undefined;
  @Input() isClub: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
