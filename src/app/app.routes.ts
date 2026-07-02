import { Routes } from '@angular/router';
import { MatchesComponent } from './components/matches/matches';
import { PlayersComponent } from './components/players/players';
import { WorldcupsComponent } from './components/worldcups/worldcups';
import { CountriesComponent } from './components/countries/countries';

export const routes: Routes = [
  { path: '', redirectTo: 'matches', pathMatch: 'full' },
  { path: 'matches', component: MatchesComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'worldcups', component: WorldcupsComponent },
  { path: 'countries', component: CountriesComponent },
];
