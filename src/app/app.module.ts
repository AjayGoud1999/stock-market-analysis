import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { TopStocksComponent } from './components/top-stocks/top-stocks.component';
import { IpoComponent } from './components/ipo/ipo.component';
import { NewsComponent } from './components/news/news.component';
import { TrendingComponent } from './components/trending/trending.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    StocksComponent,
    TopStocksComponent,
    IpoComponent,
    NewsComponent,
    TrendingComponent,
    ProfileComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add this line
})
export class AppModule { }
