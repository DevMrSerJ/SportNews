import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() sportClick = new EventEmitter<string[]>();

  private activeFootball: string = "";
  private activeBasketball: string = "";
  private activeHockey: string = "";
  private activeAuthors: string = "";
  private activeAuthorization: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickNavigation(name: string): void {
    this.clearActiveStyle();
    let sport = "";
    let title = "";
    let titleUpTable = "";
    let titleDownTable = "";

    switch (name) {
      case "football":
        this.activeFootball = "active";
        this.router.navigate(['']);
        sport = "футбол";
        title = "ТИНЬКОФФ РОССИЙСКАЯ ПРЕМЬЕР-ЛИГА 2021-22";
        break;

      case "basketball":
        this.activeBasketball = "active";
        this.router.navigate(['']);
        sport = "баскетбол";
        title = "БАСКЕТБОЛ. ВТБ. 2021-22";
        break;

      case "hockey":
        this.activeHockey = "active";
        this.router.navigate(['']);
        sport = "хоккей";
        title = "КХЛ. 2021-22. РЕГУЛЯРНЫЙ ЧЕМПИОНАТ ";
        titleUpTable = "ЗАПАД";
        titleDownTable = "ВОСТОК";
        break;

      case "authors":
        this.activeAuthors = "active";
        this.router.navigate(['']);
        sport = "футбол";
        title = "ТИНЬКОФФ РОССИЙСКАЯ ПРЕМЬЕР-ЛИГА 2021-22";
        titleDownTable = "authors";
        break;

      case "authorization":
        this.activeAuthorization = "active";
        this.router.navigate(['authorization']);
        break;

      default:
        this.clearActiveStyle();
        this.router.navigate(['']);
        break;
    }

    if (name !== "authorization") {
      let args = [sport, title, titleUpTable, titleDownTable];

      this.sportClick.emit(args);
    }
  }

  clearActiveStyle() {
    this.activeFootball = "";
    this.activeBasketball = "";
    this.activeHockey = "";
    this.activeAuthors = "";
    this.activeAuthorization = "";
  }

  public ActiveFootball() {
    return this.activeFootball;
  }

  public ActiveBasketball() {
    return this.activeBasketball;
  }

  public ActiveHockey() {
    return this.activeHockey;
  }

  public ActiveAuthors() {
    return this.activeAuthors;
  }

  public ActiveAuthorization() {
    return this.activeAuthorization;
  }
}
