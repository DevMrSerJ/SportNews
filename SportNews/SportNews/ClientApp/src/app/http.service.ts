import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../environments/environment";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get("/api/article");
  }

  getSportArticles(typeSport: string) {
    return this.http.get("/api/article/sport=" + typeSport);
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
}
