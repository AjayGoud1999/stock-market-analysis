import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEYS } from 'apikey';

@Injectable({
  providedIn: 'root'
})
export class TopgainersLosersService {
  apiUrl:string='https://www.alphavantage.co/query?'
  constructor(private Http: HttpClient) { }

  getTopGainersLosers(){
    let url=this.apiUrl+'function=TOP_GAINERS_LOSERS&apikey='+ 'API_KEYS.apikey'
    return this.Http.get(url)
  }
  getCompanyNameByStockSymbol(stockName:string){
    let url=this.apiUrl+'function=SYMBOL_SEARCH&keywords='+stockName+'&apikey='+'API_KEYS.apikey'
    return this.Http.get(url)
  }
}
