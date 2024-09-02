import { Component } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {
  ngOnInit(): void {
    const items = document.querySelectorAll('.sidebar-link');
    items.forEach(item => item.classList.remove('active')); // Remove "active" from all items
    const homeItem = document.querySelector('#trending');
    homeItem?.querySelector('.sidebar-link')?.classList.add('active');
  }
}
