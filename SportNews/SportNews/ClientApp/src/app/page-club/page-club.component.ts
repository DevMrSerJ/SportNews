import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(router: Router, private httpService: HttpService) {
    this.id = router.getCurrentNavigation()?.extras?.state?.['id'];
    this.isClub = router.getCurrentNavigation()?.extras?.state?.['isClub'];
  }

  ngOnInit(): void {
    this.getInfoAboutArticle();
  }

  getInfoAboutArticle() {
    this.httpService.getConcreateAuthors(this.id).subscribe(
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
}
