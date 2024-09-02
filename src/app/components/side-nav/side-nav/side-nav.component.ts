import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isExpanded = false; // State to manage sidebar expansion

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {}

  // ngOnInit lifecycle hook
  ngOnInit(): void {
    this.isExpanded = true;
    const homeItem = document.querySelector('#home-item');
    homeItem?.querySelector('.sidebar-link')?.classList.add('active');
    if(this.router.url==='/'){
      this.router.navigate(['/home'])
    }
  }

  collapeNavbar(): void {
    this.isExpanded = !this.isExpanded; // Toggle the sidebar expansion
  }
  onItemClick(event: Event): void {
    const items = document.querySelectorAll('.sidebar-link');
    items.forEach(item => item.classList.remove('active')); // Remove "active" from all items
    const clickedItem = event.currentTarget as HTMLElement;
    clickedItem.querySelector('.sidebar-link')?.classList.add('active'); // Add "active" to the clicked item
  }
}
