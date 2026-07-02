import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { FootballApiService } from '../../services/football-api';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './players.html',
  styleUrl: './players.scss',
})
export class PlayersComponent implements OnInit, AfterViewInit {
  players: any[] = [];
  filteredPlayers: any[] = [];
  teams: string[] = [];
  selectedTeam: string = '';
  positions: string[] = [];
  selectedPosition: string = '';
  
  loading = true;
  error: string | null = null;

  constructor(
    private footballApi: FootballApiService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  ngAfterViewInit(): void {
    this.updateSEO();
  }

  private updateSEO(): void {
    this.titleService.setTitle('Voetballers | Sport Analytics - Legendarische WK Spelers');
    this.metaService.updateTag({
      name: 'description',
      content: 'Ontdek legendarische voetballers die in het Wereldkampioenschap hebben gespeeld. Filter op team en positie.'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Voetballers | Sport Analytics'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Database van beroemde Wereldkampioenschap voetballers met statistieken.'
    });
  }

  loadPlayers(): void {
    this.loading = true;
    this.error = null;
    
    this.footballApi.getPlayers().subscribe({
      next: (data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          this.players = data;
          this.filteredPlayers = [...this.players];
          this.extractFilters();
          this.loading = false;
        } else {
          this.error = 'Geen spelersgegevens ontvangen';
          this.loading = false;
        }
      },
      error: (err) => {
        console.error('API Error:', err);
        this.error = `Fout bij het laden van spelers: ${err.message}`;
        this.loading = false;
      }
    });
  }

  extractFilters(): void {
    this.teams = [...new Set(this.players.map(p => p.team_initials))].sort();
    this.positions = [...new Set(this.players.map(p => p.position))].sort();
  }

  onTeamChange(event: any): void {
    this.selectedTeam = event.value;
    this.filterPlayers();
  }

  onPositionChange(event: any): void {
    this.selectedPosition = event.value;
    this.filterPlayers();
  }

  filterPlayers(): void {
    this.filteredPlayers = this.players.filter(player => {
      const teamMatch = !this.selectedTeam || player.team_initials === this.selectedTeam;
      const positionMatch = !this.selectedPosition || player.position === this.selectedPosition;
      return teamMatch && positionMatch;
    });
  }

  resetFilters(): void {
    this.selectedTeam = '';
    this.selectedPosition = '';
    this.filteredPlayers = [...this.players];
  }
}
