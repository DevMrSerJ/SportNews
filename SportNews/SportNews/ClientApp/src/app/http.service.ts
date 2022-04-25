import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../environments/environment";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getArticles() {
    return this.http.get("/api/article");
  }

  getSportArticles(typeSport: string, date: string, author: string, search: string) {
    return this.http.get("/api/article/sport=" + typeSport + "&Date=" + date + "&author=" + author + "&search=" + search);
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

  getConcreateClubs(id: string) {
    return this.http.get("/api/team/" + id);
  }

  sendAuthorization(login: string, body: any) {
    const contentType = new HttpHeaders().set(
      'Content-Type',
      'application/json'
    )

    return this.http.post(
      "/api/user/authorization/" + login,
      body,
      {
        headers: contentType
      }
    );
  }

  sendRegistration(body: any) {
    return this.http.post("/api/user/registration", body);
  }

  getAllCommentsForArticle(id: string) {
    return this.http.get("/api/commentary/" + id);
  }

  updateComment(id: string, body: any) {
    const contentType = new HttpHeaders().set(
      'Content-Type',
      'application/json'
    )

    return this.http.post(
      "/api/commentary/" + id,
      body,
      {
        headers: contentType
      }
    );
  }
}
