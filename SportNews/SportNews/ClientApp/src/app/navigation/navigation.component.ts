import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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

    switch (name) {
      case "football":
        this.activeFootball = "active";
        this.router.navigate(['']);
        break;

      case "basketball":
        this.activeBasketball = "active";
        this.router.navigate(['']);
        break;

      case "hockey":
        this.activeHockey = "active";
        this.router.navigate(['']);
        break;

      case "authors":
        this.activeAuthors = "active";
        this.router.navigate(['']);
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
