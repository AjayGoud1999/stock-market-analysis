import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
// import * as Highcharts from 'highcharts';
import * as Highcharts from "highcharts/highstock";
import { StockService } from 'src/app/services/stock.service';
import { TopgainersLosersService } from 'src/app/services/topgainers-losers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  topGainerData:any=[]
  topLooserData:any=[]
  lastUpdatedDate: any;
  Highcharts: typeof Highcharts = Highcharts;
  dataSP:any;
  dataNasdaq:any;
  dataDowJones:any;
  dataRussell: any;
  chartOptionsSP:any;
  chartOptionsNasdaq:any;
  chartOptionsDowJones:any;
  chartOptionsRussell:any;

  
  

  constructor(private topgainlooseservice: TopgainersLosersService, private router:Router, private stockservice: StockService){

  }

  ngOnInit(){

    this.getSPData()
    // this.getNasdaq()
    // this.getDowJones()
    // this.getRussell()
    this.topgainlooseservice.getTopGainersLosers().subscribe((obj:any)=>{
      console.log(obj)
      this.topGainerData=obj.top_gainers.slice(0,10)
      this.topLooserData=obj.top_losers.slice(0,10)
      this.lastUpdatedDate = obj.last_updated.replace(" US/Eastern", "");
      console.log(this.topGainerData,this.topLooserData)
    })
  }

  getSPData(){
    this.stockservice.getSPData().subscribe((obj:any)=>{
    const SPData = this.transformIntradayData(obj["Time Series (5min)"])
    this.chartOptionsSP= {
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: ''
        },
        labels: {
          enabled: false  
        },
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          enabled: false  
        },
        opposite: true
      },
      series: [
        {
          type: 'line',
          name: 'S&P 500',
          color: '#5D60EF',  // Bearish color
          upColor: '#5D60EF',  // Bullish color
          lineColor: '#5D60EF',  // Bearish border color
          upLineColor: '#5D60EF',  // Bullish border color
          data: SPData
        }
      ]
    };
    })
  }
  getNasdaq(){
    this.stockservice.getNasdaqData().subscribe((obj:any)=>{
    const Nasqad = this.transformIntradayData(obj["Time Series (5min)"])
    this.chartOptionsNasdaq= {
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: ''
        },
        labels: {
          enabled: false  
        },
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          enabled: false  
        },
        opposite: true
      },
      series: [
        {
          type: 'line',
          name: 'Nasqad',
          color: '#5D60EF',  // Bearish color
          upColor: '#5D60EF',  // Bullish color
          lineColor: '#5D60EF',  // Bearish border color
          upLineColor: '#5D60EF',  // Bullish border color
          data: Nasqad
        }
      ]
    };
    })
  }
  getDowJones(){
    this.stockservice.getDowJonesData().subscribe((obj:any)=>{
    const dowJones = this.transformIntradayData(obj["Time Series (5min)"])
    this.chartOptionsDowJones= {
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: ''
        },
        labels: {
          enabled: false  
        },
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          enabled: false  
        },
        opposite: true
      },
      series: [
        {
          type: 'line',
          name: 'Dow Jones',
          color: '#5D60EF',  // Bearish color
          upColor: '#5D60EF',  // Bullish color
          lineColor: '#5D60EF',  // Bearish border color
          upLineColor: '#5D60EF',  // Bullish border color
          data: dowJones
        }
      ]
    };
    })
  }
  getRussell(){
    this.stockservice.getRussellData().subscribe((obj:any)=>{
      const russellData = this.transformIntradayData(obj["Time Series (5min)"])
      this.chartOptionsRussell= {
        title: {
          text: ''
        },
        
        xAxis: {
          type: 'datetime',
          title: {
            text: ''
          },
          labels: {
            enabled: false  
          }
        },
        yAxis: {
          title: {
            text: ''
          },
          labels: {
            enabled: false  
          },
          opposite: true
        },
        series: [
          {
            type: 'line',
            name: 'Russell 2000',
            color: '#5D60EF',  // Bearish color
            upColor: '#5D60EF',  // Bullish color
            lineColor: '#5D60EF',  // Bearish border color
            upLineColor: '#5D60EF',  // Bullish border color
            fillColor: '#FF4500',
            data: russellData
          }
        ]
      };
      })
  }
  transformIntradayData(data: any): any[] {
    return Object.keys(data).map(timestamp => {
      const date = new Date(timestamp).getTime();
      const closePrice = parseFloat(data[timestamp]['4. close']);
      return [date, closePrice];
    }).reverse();
  }
  
  navigateToStocks(data:string){
    data=data.replace('+','')
    this.router.navigate(['/stocks'], {queryParams:{stockName:data}})
  }
}