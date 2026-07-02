import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {
  private baseUrl = 'https://webteacher.nl/voetbal/json.php';

  constructor(private http: HttpClient) {}

  getMatches(): Observable<any> {
    return this.http.get(`${this.baseUrl}?data=matches`);
  }

  getMatchesByYear(year: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?data=matches&year=${year}`);
  }

  getMatchesByYearAndStage(year: number, stage: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?data=matches&year=${year}&stage=${stage}`);
  }

  getMatchesByMatchId(matchId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?data=matches&matchid=${matchId}`);
  }

  getPlayers(): Observable<any> {
    return this.http.get(`${this.baseUrl}?data=players`);
  }

  getPlayersByTeam(team: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?data=players&team=${team}`);
  }

  getYears(): Observable<any> {
    return this.http.get(`${this.baseUrl}?data=years`);
  }

  getWorldcups(): Observable<any> {
    return this.http.get(`${this.baseUrl}?data=worldcups`);
  }

  getCountries(): Observable<any> {
    return this.http.get(`${this.baseUrl}?data=countries`);
  }

  getWorldcities(): Observable<any> {
    return this.http.get(`${this.baseUrl}?data=worldcities`);
  }

  getYearsByCountry(country: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?data=years&country=${country}`);
  }
}
