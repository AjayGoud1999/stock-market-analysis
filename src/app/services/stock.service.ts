import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEYS } from 'apikey';
@Injectable({
  providedIn: 'root'
})
export class StockService {
apiUrl:string='https://www.alphavantage.co/query?'
  constructor(private httpClient:HttpClient) { }


  getSPData(){
    let url='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=SPY&interval=5min&apikey='+'your_api_key'
    return this.httpClient.get(url)
  }
  getNasdaqData(){
    let url='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NDAQ&interval=5min&apikey=your_api_key'
    return this.httpClient.get(url)
  }
  getDowJonesData(){
    let url='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DIA&interval=5min&apikey=your_api_key'
    return this.httpClient.get(url)

  }
  getRussellData(){
    let url='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IWM&interval=5min&apikey=your_api_key'
    return this.httpClient.get(url)

  }

  getStockOverview(stockname:string){

    let url=this.apiUrl+'function=OVERVIEW&symbol='+stockname+'&apikey='+'API_KfvEYS.apikey'
    return this.httpClient.get(url)
  }

  getStockData_TIME_SERIES_DAILY(symbol:string){
    let url='https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+symbol+'&apikey=API_KEYapikey'
    return this.httpClient.get(url)
  }
  getStockData_TIME_SERIES_WEEKLY(symbol:string){
    let url='https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol='+symbol+'&apikey=API_KEYapikey'
    return this.httpClient.get(url)
  }
  getStockData_TIME_SERIES_MONTHLY(symbol:string){
    let url='https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='+symbol+'&apikey=API_KEYapikey'
    return this.httpClient.get(url)
  }
    getStockData_TIME_SERIES_INTRADAY(symbol:string){
    let url='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+symbol+'&interval=60min&apikey=YOUR_API_KEY'
    return this.httpClient.get(url)
  }
}
