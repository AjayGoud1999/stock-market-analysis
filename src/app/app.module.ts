import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
// import { FusionChartsModule } from "angular-fusioncharts";

// import * as FusionCharts from "fusioncharts";
// import * as charts from "fusioncharts/fusioncharts.charts";
// import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// // Pass the fusioncharts library and chart modules
// FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
