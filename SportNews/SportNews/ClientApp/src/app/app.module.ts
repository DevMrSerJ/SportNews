import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Guid } from 'js-guid';

import { AppComponent } from './app.component';
import { HttpService } from "./http.service";

import { NavigationComponent } from './navigation/navigation.component';
import { FiltersComponent } from './filters/filters.component';

import { PageMainComponent } from './page-main/page-main.component';
import { PageArticleComponent } from './page-article/page-article.component';
import { PageAuthorizationComponent } from './page-authorization/page-authorization.component';
import { PageClubComponent } from './page-club/page-club.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ClubsStatisticsComponent } from './clubs-statistics/clubs-statistics.component';
import { CardArticleComponent } from './card-article/card-article.component';

import { FooterComponent } from './footer/footer.component';
import { AboutClubComponent } from './about-club/about-club.component';
import { currentUser } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: PageMainComponent },
  { path: 'article', component: PageArticleComponent },
  { path: 'authorization', component: PageAuthorizationComponent },
  { path: 'club', component: PageClubComponent },
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
    PageAuthorizationComponent,
    FiltersComponent,
    PageClubComponent,
    AboutClubComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
