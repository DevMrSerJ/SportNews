import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../environments/environment";

@Injectable()
export class HttpService {

  private today: number;

  constructor(private http: HttpClient) {
    this.today = new Date().getTime();
  }

  getArticles() {
    return this.http.get("/api/article");
  }

  getSportArticles(typeSport: string) {
    return this.http.get("/api/article/sport=" + typeSport + "&Date=" + this.today + "&Author=&Search=");
  }

  getConcreateArticle(id: string) {
    return this.http.get("/api/article/" + id);
  }

  getMainTeams() {
    return this.http.get("/api/team/sport=футбол");
  }

  getTeams(sport: string) {
    return this.http.get("/api/team/sport=" + sport);
  }

  getAllAuthors() {
    return this.http.get("/api/user");
  }

  getConcreateAuthors(id: string) {
    return this.http.get("/api/user/" + id);
  }
}
