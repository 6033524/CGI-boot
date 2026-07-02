import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Sport Analytics';
  
  navLinks = [
    { label: 'Matches', route: '/matches' },
    { label: 'Players', route: '/players' },
    { label: 'Worldcups', route: '/worldcups' },
    { label: 'Countries', route: '/countries' },
  ];
}
