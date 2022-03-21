import { Component, OnInit } from '@angular/core';
import { Article } from '../card-article/card-article.component';
import { Team } from '../clubs-statistics/clubs-statistics.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.css'],
  providers: [HttpService]
})
export class PageMainComponent implements OnInit {

  public articles: Article[] = [];
  public teamUpTable: Team[] = [];
  public teamDownTable: Team[] = [];

  public title: string = "";
  public titleUpTable: string = "";
  public titleDownTable: string = "";

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAllArticles();
    this.getMainTeams();

    this.title = "ТИНЬКОФФ РОССИЙСКАЯ ПРЕМЬЕР-ЛИГА 2021-22";
  }

  getAllArticles(): void {
    this.httpService.getArticles().subscribe(
      (data: any) => {
        data.forEach((i: any) => this.articles.push(
          {
            id: i.id,
            image: "",
            header: i.header,
            shortText: i.shortText,
            text: "",
            author: i.author,
            date: new Date(i.datePublish).toLocaleDateString(),
            sport: i.sport.split(" ", 1)
          }
        ));
      },
      (error) => {
        alert(error.message);
        console.log(error)
      });
  }

  getArticlesSports(typeSport: string): void {
    this.httpService.getSportArticles(typeSport).subscribe(
      (data: any) => {
        this.articles = [];

        data.forEach((i: any) => this.articles.push(
          {
            id: i.id,
            image: "",
            header: i.header,
            shortText: i.shortText,
            text: "",
            author: i.author,
            date: new Date(i.datePublish).toLocaleDateString(),
            sport: i.sport.split(" ", 1)
          }
        ));
      },
      (error) => {
        alert(error.message);
        console.log(error)
      });
  }

  getMainTeams(): void {
    this.httpService.getMainTeams().subscribe(
      (data: any) => {
        this.teamUpTable = [];

        data.forEach((i: any) => this.teamUpTable.push(
          {
            id: i.id,
            image: "",
            name: i.shortName,
            fullName: "",
            description: "",
            position: i.position,
            score: i.score
          }
        ));

        this.teamUpTable = this.teamUpTable.sort((n1, n2) => n1.position - n2.position);
      },
      (error) => {
        alert(error.message);
        console.log(error)
      });
  }

  getConcreateTeams(typeSport: string): void {
    this.httpService.getTeams(typeSport).subscribe(
      (data: any) => {
        this.teamUpTable = [];
        this.teamDownTable = [];

        data.forEach((i: any) => {

          let team = {
            id: i.id,
            image: "",
            name: i.shortName,
            fullName: "",
            description: "",
            position: i.position,
            score: i.score
          };

          // Хоккей запад
          if (this.titleUpTable && i.sport === "7a58844c-68a5-4f41-93c3-c706294f61c7") {
            this.teamDownTable.push(team)
          }
          else {
            this.teamUpTable.push(team)
          }
        });

        this.teamUpTable = this.teamUpTable.sort((n1, n2) => n1.position - n2.position);
      },
      (error) => {
        alert(error.message);
        console.log(error)
      });
  }

  onChangeSport(args: string[]): void {
    this.title = args[1];
    this.titleUpTable = args[2];
    this.titleDownTable = args[3];

    this.getConcreateTeams(args[0]);
    this.getArticlesSports(args[0]);
  }
}
