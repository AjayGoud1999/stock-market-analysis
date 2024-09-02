import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { TopStocksComponent } from './components/top-stocks/top-stocks.component';
import { IpoComponent } from './components/ipo/ipo.component';
import { NewsComponent } from './components/news/news.component';
import { TrendingComponent } from './components/trending/trending.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path:'', component:SideNavComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'stocks',component:StocksComponent
  },
  {
    path:'top-stocks',component:TopStocksComponent
  },
  {
    path:'ipo',component:IpoComponent
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'trending',component:TrendingComponent
  },
  {
    path:'profile',component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
