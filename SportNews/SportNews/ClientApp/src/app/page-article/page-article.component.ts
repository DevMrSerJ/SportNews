import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../card-article/card-article.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit {

  public id = "";
  public article: Article | undefined;

  constructor(router: Router, private httpService: HttpService) {
    this.id = router.getCurrentNavigation()?.extras?.state?.['id'];
  }

  ngOnInit(): void {
    this.getInfoAboutArticle();
  }

  getInfoAboutArticle() {
    this.httpService.getConcreateArticle(this.id).subscribe(
      (data: any) => {
        this.article = {
          id: data[0].id,
          image: data[0].imageUrl,
          header: data[0].header,
          shortText: data[0].shortText,
          text: data[0].text,
          author: data[0].author,
          date: new Date(data[0].datePublish).toLocaleDateString(),
          sport: data[0].sport.split(" ", 1)
        };
      },
      (error) => {
        alert(error.message);
        console.log(error)
      });
  }
}
