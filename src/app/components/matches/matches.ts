import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { FootballApiService } from '../../services/football-api';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './matches.html',
  styleUrl: './matches.scss',
})
export class MatchesComponent implements OnInit, AfterViewInit {
  matches: any[] = [];
  filteredMatches: any[] = [];
  years: number[] = [];
  selectedYear: number | null = null;
  selectedStage: string = '';
  stages: string[] = [];
  
  loading = true;
  error: string | null = null;
  displayedColumns: string[] = ['year', 'stage', 'city', 'teams', 'score'];

  constructor(
    private footballApi: FootballApiService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.loadMatches();
  }

  ngAfterViewInit(): void {
    this.updateSEO();
  }

  private updateSEO(): void {
    this.titleService.setTitle('Voetbalwedstrijden | Sport Analytics - WK Historie 1930-2014');
    this.metaService.updateTag({
      name: 'description',
      content: 'Bekijk alle voetbalwedstrijden van het Wereldkampioenschap van 1930 tot 2014. Filter op jaar en fase.'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Voetbalwedstrijden | Sport Analytics'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Verken alle Wereldkampioenschap voetbalwedstrijden met geavanceerde filters.'
    });
  }

  loadMatches(): void {
    this.loading = true;
    this.error = null;
    
    this.footballApi.getMatches().subscribe({
      next: (data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          this.matches = data.map(match => this.normalizeMatch(match));
          this.filteredMatches = [...this.matches];
          this.extractFilters();
          this.loading = false;
          console.log('Matches loaded:', this.matches.length);
          console.log('Sample match:', this.matches[0]);
        } else {
          this.error = 'Geen wedstrijdgegevens ontvangen';
          this.loading = false;
        }
      },
      error: (err) => {
        console.error('API Error:', err);
        this.error = `Fout bij het laden van gegevens: ${err.message}`;
        this.loading = false;
      }
    });
  }

  private normalizeMatch(match: any): any {
    return {
      id: match.id,
      year: match.year || this.extractYearFromDate(match.date),
      stage: match.stage || 'Onbekend',
      city: match.city || 'Onbekend',
      stadium: match.stadium || '',
      home_team_name: match.home_team_name || 'Team A',
      home_team_goals: match.home_team_goals !== undefined ? match.home_team_goals : 0,
      away_team_name: match.away_team_name || 'Team B',
      away_team_goals: match.away_team_goals !== undefined ? match.away_team_goals : 0,
      attendance: match.attendance || 0,
      date: match.date || '',
      win_conditions: match.win_conditions || ''
    };
  }

  private extractYearFromDate(dateStr: string): number {
    if (!dateStr) return 0;
    const parts = dateStr.split('-');
    return parseInt(parts[0], 10) || 0;
  }

  extractFilters(): void {
    this.years = [...new Set(this.matches.map(m => m.year).filter(y => y > 0))].sort((a, b) => b - a);
    this.stages = [...new Set(this.matches.map(m => m.stage).filter(s => s && s !== 'Onbekend'))].sort();
    
    console.log('Years:', this.years);
    console.log('Stages:', this.stages);
  }

  onYearChange(event: any): void {
    this.selectedYear = event.value;
    this.filterMatches();
  }

  onStageChange(event: any): void {
    this.selectedStage = event.value;
    this.filterMatches();
  }

  filterMatches(): void {
    console.log('Filtering with year:', this.selectedYear, 'stage:', this.selectedStage);
    
    this.filteredMatches = this.matches.filter(match => {
      const yearMatch = !this.selectedYear || match.year === this.selectedYear;
      const stageMatch = !this.selectedStage || match.stage === this.selectedStage;
      return yearMatch && stageMatch;
    });

    console.log('Filtered results:', this.filteredMatches.length);
  }

  resetFilters(): void {
    this.selectedYear = null;
    this.selectedStage = '';
    this.filteredMatches = [...this.matches];
    console.log('Filters reset');
  }

  getResult(match: any): string {
    if (!match.home_team_goals && match.home_team_goals !== 0) {
      return '—';
    }
    if (!match.away_team_goals && match.away_team_goals !== 0) {
      return '—';
    }
    
    if (match.home_team_goals > match.away_team_goals) {
      return 'WIN';
    } else if (match.home_team_goals < match.away_team_goals) {
      return 'LOSS';
    }
    return 'DRAW';
  }
}
