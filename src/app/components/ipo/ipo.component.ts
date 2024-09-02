import { Component } from '@angular/core';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent {
  ngOnInit(): void {
    const items = document.querySelectorAll('.sidebar-link');
    items.forEach(item => item.classList.remove('active')); // Remove "active" from all items
    const homeItem = document.querySelector('#ipo');
    homeItem?.querySelector('.sidebar-link')?.classList.add('active');
  }
}
