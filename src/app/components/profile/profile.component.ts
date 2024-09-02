import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  ngOnInit(): void {
    const items = document.querySelectorAll('.sidebar-link');
    items.forEach(item => item.classList.remove('active')); // Remove "active" from all items
    const homeItem = document.querySelector('#profile');
    homeItem?.querySelector('.sidebar-link')?.classList.add('active');
  }
}
