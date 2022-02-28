import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageArticleComponent } from './page-article/page-article.component';
import { ClubsStatisticsComponent } from './clubs-statistics/clubs-statistics.component';
import { CardArticleComponent } from './card-article/card-article.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageMainComponent } from './page-main/page-main.component';
import { PageAuthorizationComponent } from './page-authorization/page-authorization.component';

const appRoutes: Routes = [
  { path: '', component: PageMainComponent },
  { path: 'article', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageArticleComponent,
    ClubsStatisticsComponent,
    CardArticleComponent,
    FooterComponent,
    PageNotFoundComponent,
    PageMainComponent,
    PageAuthorizationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
