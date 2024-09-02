import { Component } from '@angular/core';

@Component({
  selector: 'app-top-stocks',
  templateUrl: './top-stocks.component.html',
  styleUrls: ['./top-stocks.component.css']
})
export class TopStocksComponent {
  ngOnInit(): void {
    const items = document.querySelectorAll('.sidebar-link');
    items.forEach(item => item.classList.remove('active')); // Remove "active" from all items
    const homeItem = document.querySelector('#topstock-item');
    homeItem?.querySelector('.sidebar-link')?.classList.add('active');
  }
}
