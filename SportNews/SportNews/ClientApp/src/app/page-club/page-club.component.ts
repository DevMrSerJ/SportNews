import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../clubs-statistics/clubs-statistics.component';
import { HttpService } from '../http.service';

export interface User {
  id: string,
  name: string,
  shortDescription: string,
  fullDescription: string,
  image: string
}

@Component({
  selector: 'app-page-club',
  templateUrl: './page-club.component.html',
  styleUrls: ['./page-club.component.css']
})

export class PageClubComponent implements OnInit {
  public id: string = "";
  public isClub: boolean = false;
  public user: User | undefined;
  public team: Team | undefined;

  constructor(router: Router, private httpService: HttpService) {
    this.id = router.getCurrentNavigation()?.extras?.state?.['id'];
    this.isClub = router.getCurrentNavigation()?.extras?.state?.['isClub'];
  }

  ngOnInit(): void {
    if (this.isClub) {
      this.getInfoAboutClub();
    } else {
      this.getInfoAboutAuthor();
    }
  }

  getInfoAboutAuthor() {
    this.httpService.getConcreateClubs(this.id).subscribe(
      (data: any) => {
        this.user = {
          id: data[0].id,
          name: data[0].name,
          image: data[0].image,
          shortDescription: data[0].shortDescription,
          fullDescription: data[0].fullDescription
        };
      },
      (error) => {
        alert(error.message);
        console.log(error)
      });
  }

  getInfoAboutClub() {
    this.httpService.getConcreateClubs(this.id).subscribe(
      (data: any) => {
        this.team = {
          id: data[0].id,
          image: data[0].imageUrl,
          name: data[0].shortName,
          fullName: data[0].fullName,
          description: data[0].description,
          position: data[0].position,
          score: data[0].score
        };
      },
      (error) => {
        alert(error.message);
        console.log(error)
      });
  }
}
