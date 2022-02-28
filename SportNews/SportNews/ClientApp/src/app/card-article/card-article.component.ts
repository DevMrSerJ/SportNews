import { Component, OnInit } from '@angular/core';

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

  public articles: Article[] = [];

  constructor() { }

  ngOnInit(): void {
    this.articles.push(
      {
        id: "",
        image: "",
        header: "Леонид Слуцкий: «Арбитр точно не повлиял на ход матча»",
        shortText: "Главный тренер «Рубина» Леонид Слуцкий прокомментировал ничью с «Уфой» (1:1) в матче 12-го тура Тинькофф РПЛ.",
        text: "",
        author: "Генич К.М.",
        date: "24.10.2021",
        sport: "футбол"
      },
      {
        id: "",
        image: "",
        header: "Владимир Познер — о матче «Зенита» со «Спартаком»",
        shortText: "Телеведущий и журналист Владимир Познер поделился ожиданиями от матча 12-го тура Тинькофф РПЛ между «Зенитом» и «Спартаком».",
        text: "",
        author: "Генич К.М.",
        date: "24.10.2021",
        sport: "футбол"
      },
      {
        id: "",
        image: "",
        header: "Федор Чалов — о голе в ворота «Крыльев»",
        shortText: "Форвард ЦСКА Федор Чалов подвел итог победы в матче 12-го тура Тинькофф РПЛ с «Крыльями Советов» (3:1).",
        text: "",
        author: "Генич К.М.",
        date: "24.10.2021",
        sport: "футбол"
      }
    );
  }

}
