import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { FootballApiService } from '../../services/football-api';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-worldcups',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule],
  templateUrl: './worldcups.html',
  styleUrl: './worldcups.scss',
})
export class WorldcupsComponent implements OnInit, AfterViewInit {
  worldcups: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private footballApi: FootballApiService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.loadWorldcups();
  }

  ngAfterViewInit(): void {
    this.updateSEO();
  }

  private updateSEO(): void {
    this.titleService.setTitle('Wereldkampioenschappen | Sport Analytics - WK Geschiedenis');
    this.metaService.updateTag({
      name: 'description',
      content: 'Verken alle voetbal Wereldkampioenschappen van 1930 tot 2014 met uitslagen en statistieken.'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Wereldkampioenschappen | Sport Analytics'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Volledige historie van voetbal Wereldkampioenschappen met winnaars en statistieken.'
    });
  }

  loadWorldcups(): void {
    this.loading = true;
    this.error = null;
    
    this.footballApi.getWorldcups().subscribe({
      next: (data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          this.worldcups = data.sort((a, b) => b.id - a.id);
          this.loading = false;
        } else {
          this.error = 'Geen toernooigegevens ontvangen';
          this.loading = false;
        }
      },
      error: (err) => {
        console.error('API Error:', err);
        this.error = `Fout bij het laden van toernooien: ${err.message}`;
        this.loading = false;
      }
    });
  }
}
