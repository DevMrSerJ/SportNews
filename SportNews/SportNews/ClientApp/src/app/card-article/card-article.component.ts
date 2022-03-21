import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Article {
  id: string;
  image: string;
  header: string;
  shortText: string;
  text: string;
  author: string;
  date: string;
  sport: string;
}

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {

  @Input() public articles: Article[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onClickReferense(id: string): void {
    this.router.navigateByUrl('/article', {
      state: {
        id: id
      }
    });
  }

}
