import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from "highcharts/highstock";
import { StockService } from 'src/app/services/stock.service';
import { TopgainersLosersService } from 'src/app/services/topgainers-losers.service';
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent {
  currentStockName: any = '';
  stockDetails:any;
  chartOptions:any;
  Highcharts: typeof Highcharts = Highcharts;
  constructor(private activatedRoute: ActivatedRoute, private stockservice:StockService) { }
  ngOnInit(): void {
    const items = document.querySelectorAll('.sidebar-link');
    items.forEach(item => item.classList.remove('active')); // Remove "active" from all items
    const homeItem = document.querySelector('#stock-item');
    homeItem?.querySelector('.sidebar-link')?.classList.add('active');
    this.currentStockName = this.activatedRoute.snapshot.queryParamMap.get('stockName') || ''
    if (this.currentStockName.length > 0) {
      this.getStockData()
      this.getStockChartData()
    }
  }

  getStockData(){
    this.stockservice.getStockOverview(this.currentStockName).subscribe((obj:any)=>{
      this.stockDetails=obj
    })
  }

  getStockChartData(){
      this.stockservice.getStockData_TIME_SERIES_MONTHLY(this.currentStockName).subscribe((obj:any)=>{
        let stockData = this.transformData(obj["Monthly Time Series"])
        this.chartOptions= {
          title: {
            text: ''
          },
          
          xAxis: {
            type: 'datetime',
            title: {
              text: 'Date'
            },
            labels: {
              enabled: true  
            }
          },
          yAxis: {
            title: {
              text: 'Price ($)'
            },
            labels: {
              enabled: true  
            },
            opposite: true
          },
          series: [
            {
              type: 'area',
              name: 'Russell 200000',
              color: '#5D60EF',  // Bearish color
              upColor: '#5D60EF',  // Bullish color
              lineColor: '#5D60EF',  // Bearish border color
              upLineColor: '#5D60EF',  // Bullish border color
              data: stockData,
              fillColor: '#D1E9F6'
            }
          ]
        };
      })
      
  }
  transformData(data: any): any[] {
    return Object.keys(data).map(timestamp => {
      const date = new Date(timestamp).getTime();
      const closePrice = parseFloat(data[timestamp]['4. close']);
      return [date, closePrice];
    }).reverse();
  }

}
