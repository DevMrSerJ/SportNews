import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageArticleComponent } from './page-article/page-article.component';
import { ClubsStatisticsComponent } from './clubs-statistics/clubs-statistics.component';
import { CardArticleComponent } from './card-article/card-article.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageArticleComponent,
    ClubsStatisticsComponent,
    CardArticleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
