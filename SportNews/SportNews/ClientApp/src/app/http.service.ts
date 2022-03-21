import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../environments/environment";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get("/api/article");
  }

  getConcreateArticle(id: string) {
    return this.http.get("/api/article/" + id);
  }
}
