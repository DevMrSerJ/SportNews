import { Component, OnInit } from '@angular/core';
import { Article } from '../card-article/card-article.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.css'],
  providers: [HttpService]
})
export class PageMainComponent implements OnInit {

  public articles: Article[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAllArticles();
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
}
