import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchesComponent } from './matches';
import { FootballApiService } from '../../services/football-api';
import { of, throwError } from 'rxjs';

describe('MatchesComponent', () => {
  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;
  let mockApiService: jasmine.SpyObj<FootballApiService>;

  beforeEach(async () => {
    // Create mock API service
    mockApiService = jasmine.createSpyObj('FootballApiService', ['getMatches']);

    await TestBed.configureTestingModule({
      imports: [MatchesComponent],
      providers: [
        { provide: FootballApiService, useValue: mockApiService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
  });

  describe('Component Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should load matches on init', () => {
      const mockMatches = [
        {
          id: 1,
          year: 2014,
          stage: 'Final',
          city: 'Rio',
          home_team_name: 'Germany',
          away_team_name: 'Argentina',
          home_team_goals: 1,
          away_team_goals: 0
        }
      ];

      mockApiService.getMatches.and.returnValue(of(mockMatches));

      component.ngOnInit();

      expect(mockApiService.getMatches).toHaveBeenCalled();
      expect(component.matches.length).toBe(1);
      expect(component.loading).toBeFalse();
    });
  });

  describe('Filtering', () => {
    beforeEach(() => {
      component.matches = [
        { year: 2014, stage: 'Final', home_team_goals: 1, away_team_goals: 0 },
        { year: 2014, stage: 'Semi-Final', home_team_goals: 7, away_team_goals: 1 },
        { year: 2010, stage: 'Final', home_team_goals: 1, away_team_goals: 0 }
      ];
      component.filteredMatches = component.matches;
    });

    it('should filter matches by year', () => {
      component.selectedYear = 2014;
      component.filterMatches();

      expect(component.filteredMatches.length).toBe(2);
      expect(component.filteredMatches.every(m => m.year === 2014)).toBeTrue();
    });

    it('should filter matches by stage', () => {
      component.selectedStage = 'Final';
      component.filterMatches();

      expect(component.filteredMatches.length).toBe(2);
      expect(component.filteredMatches.every(m => m.stage === 'Final')).toBeTrue();
    });

    it('should apply multiple filters together', () => {
      component.selectedYear = 2014;
      component.selectedStage = 'Final';
      component.filterMatches();

      expect(component.filteredMatches.length).toBe(1);
      expect(component.filteredMatches[0].year).toBe(2014);
      expect(component.filteredMatches[0].stage).toBe('Final');
    });

    it('should reset filters', () => {
      component.selectedYear = 2014;
      component.selectedStage = 'Final';
      component.resetFilters();

      expect(component.selectedYear).toBeNull();
      expect(component.selectedStage).toBe('');
      expect(component.filteredMatches).toEqual(component.matches);
    });
  });

  describe('Match Results', () => {
    it('should determine win result correctly', () => {
      const match = { home_team_goals: 2, away_team_goals: 1 };
      expect(component.getResult(match)).toBe('WIN');
    });

    it('should determine loss result correctly', () => {
      const match = { home_team_goals: 1, away_team_goals: 2 };
      expect(component.getResult(match)).toBe('LOSS');
    });

    it('should determine draw result correctly', () => {
      const match = { home_team_goals: 1, away_team_goals: 1 };
      expect(component.getResult(match)).toBe('DRAW');
    });
  });

  describe('Error Handling', () => {
    it('should handle API errors and load mock data', () => {
      mockApiService.getMatches.and.returnValue(throwError(() => new Error('API Error')));

      component.ngOnInit();

      expect(component.matches.length).toBeGreaterThan(0);
      expect(component.error).toBeNull();
      expect(component.loading).toBeFalse();
    });
  });

  describe('Filter Extraction', () => {
    beforeEach(() => {
      component.matches = [
        { year: 2014, stage: 'Final' },
        { year: 2014, stage: 'Semi-Final' },
        { year: 2010, stage: 'Final' }
      ];
    });

    it('should extract unique years', () => {
      component.extractFilters();
      expect(component.years).toContain(2014);
      expect(component.years).toContain(2010);
      expect(component.years.length).toBe(2);
    });

    it('should extract unique stages', () => {
      component.extractFilters();
      expect(component.stages).toContain('Final');
      expect(component.stages).toContain('Semi-Final');
    });
  });
});
