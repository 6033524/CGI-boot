import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { FootballApiService } from '../../services/football-api';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './countries.html',
  styleUrl: './countries.scss',
})
export class CountriesComponent implements OnInit, AfterViewInit {
  countries: any[] = [];
  filteredCountries: any[] = [];
  searchTerm: string = '';
  loading = true;
  error: string | null = null;

  constructor(
    private footballApi: FootballApiService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  ngAfterViewInit(): void {
    this.updateSEO();
  }

  private updateSEO(): void {
    this.titleService.setTitle('Landen & Steden | Sport Analytics - WK Gastlanden');
    this.metaService.updateTag({
      name: 'description',
      content: 'Ontdek alle gastlanden en steden die het Wereldkampioenschap voetbal hebben gehost van 1930 tot 2014.'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Landen & Steden | Sport Analytics'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Geografische gids van Wereldkampioenschap gastherstanden met locaties.'
    });
  }

  loadCountries(): void {
    this.loading = true;
    this.error = null;
    
    this.footballApi.getWorldcities().subscribe({
      next: (data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          this.countries = data;
          this.filteredCountries = [...this.countries];
          this.loading = false;
        } else {
          this.error = 'Geen landengegevens ontvangen';
          this.loading = false;
        }
      },
      error: (err) => {
        console.error('API Error:', err);
        this.error = `Fout bij het laden van landen: ${err.message}`;
        this.loading = false;
      }
    });
  }

  onSearchInput(event: any): void {
    this.searchTerm = event.target.value;
    this.searchCountries();
  }

  searchCountries(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCountries = this.countries.filter(c =>
      c.country?.toLowerCase().includes(term) ||
      c.city?.toLowerCase().includes(term)
    );
  }

  resetSearch(): void {
    this.searchTerm = '';
    this.filteredCountries = [...this.countries];
  }
}
