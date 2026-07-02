# Technische Documentatie - Sport Analytics

## Architectuur Overzicht

```
sport-analytics/
├── Frontend (Angular)
│   ├── Components (4x)
│   ├── Services (API)
│   ├── Routing
│   └── Styling (SCSS)
├── External API (webteacher.nl)
├── Docker Container
└── Production Build
```

## Componenten Structuur

### 1. Matches Component
**Doel**: Weergave en filtering van voetbalwedstrijden

**Features**:
- Tabel layout met Angular Material
- Jaar filtering (dropdown)
- Stadium/fase filtering (dropdown)
- Combineerbare filters
- Real-time filtering
- Resultaat berekening (WIN/LOSS/DRAW)

**Data fields**:
```typescript
year: number
stage: string
city: string
home_team_name: string
home_team_goals: number
away_team_name: string
away_team_goals: number
attendance: number
```

**API Endpoint**: `/json.php?data=matches`

---

### 2. Players Component
**Doel**: Weergave en filtering van voetbalspelers

**Features**:
- Kaartweergave
- Team filtering
- Positie filtering
- Combineerbare filters
- Shirtnumber badge

**Data fields**:
```typescript
playername: string
team_initials: string
position: string
shirtnumber: number
coach_name: string
```

**API Endpoint**: `/json.php?data=players`

---

### 3. Worldcups Component
**Doel**: Weergave toernooigegevens

**Features**:
- Tournament cards
- Winner/runners-up weergave
- Statistieken (goals, teams, matches)
- Sorteer op ID descending

**Data fields**:
```typescript
id: number
country: string
winner: string
runners_up: string
third: string
fourth: string
goalsscored: number
qualifiedteams: number
matchesplayed: number
attendance: number
```

**API Endpoint**: `/json.php?data=worldcups`

---

### 4. Countries Component
**Doel**: Geografische zoekfunctionaliteit

**Features**:
- Real-time search
- Zoeken op land/stad
- Coördinaten weergave
- Card layout

**Data fields**:
```typescript
city: string
country: string
lat: number
lng: number
```

**API Endpoint**: `/json.php?data=worldcities`

---

## Service Architecture

### FootballApiService

```typescript
// Public methods
getMatches(): Observable<any>
getMatchesByYear(year: number): Observable<any>
getMatchesByYearAndStage(year: number, stage: string): Observable<any>
getMatchesByMatchId(matchId: number): Observable<any>

getPlayers(): Observable<any>
getPlayersByTeam(team: string): Observable<any>

getYears(): Observable<any>
getWorldcups(): Observable<any>
getCountries(): Observable<any>
getWorldcities(): Observable<any>
getYearsByCountry(country: string): Observable<any>
```

**Base URL**: `https://webteacher.nl/voetbal/json.php`

**Error Handling**:
- HTTP error interception
- Console logging
- Observable error propagation
- Subscriber error handling in components

---

## Routing

```typescript
Route | Component | Path
------|-----------|-----
Home  | Redirect  | /
Matches | MatchesComponent | /matches
Players | PlayersComponent | /players
Worldcups | WorldcupsComponent | /worldcups
Countries | CountriesComponent | /countries
```

---

## Styling Architecture

### SCSS Variables
```scss
$primary-color: #1976d2
$primary-dark: #1565c0
$text-dark: #333
$text-light: #666
$border-light: #eee
$shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
```

### Responsive Breakpoints
```scss
Desktop: >= 1200px (default)
Tablet: 768px - 1199px
Mobile: < 768px
```

### Layout Patterns
- **Header**: Fixed, dark gradient
- **Main**: Flex container, full width
- **Tables**: Responsive horizontal scroll on mobile
- **Grids**: CSS Grid mit auto-fill
- **Cards**: Flexbox with hover effects

---

## SEO Implementation

### Meta Tags
Dynamisch ingesteld via Angular Meta service in AfterViewInit:

```typescript
- Page Title (40-60 characters)
- Meta Description (120-160 characters)
- Open Graph Tags (social sharing)
- Canonical URLs (future)
```

### Semantic HTML
- `<header>` voor navigatie
- `<main>` voor inhoud
- `<h1>, <h2>, <h3>` structuur
- `<table>` voor tabulaire data
- `<nav>` voor navigatie links

### URL Structure
```
/matches       - Wedstrijden
/players       - Spelers
/worldcups     - Toernooien
/countries     - Landen
```

---

## Error Handling Strategy

### Component Level
```typescript
// In subscribe next handler
if (data && Array.isArray(data) && data.length > 0) {
  // Process data
} else {
  this.error = 'Geen gegevens ontvangen';
}

// In subscribe error handler
error: (err) => {
  console.error('API Error:', err);
  this.error = `Fout: ${err.message}`;
}
```

### Data Normalization
```typescript
// Matches component example
private normalizeMatch(match: any): any {
  return {
    year: match.year || extractYearFromDate(match.date),
    stage: match.stage || 'Onbekend',
    // ... other fields
  };
}
```

---

## Performance Optimizations

### Current
- Lazy loading per route (Angular default)
- Minimal HTTP calls (1 per page load)
- SCSS preprocessing
- Material CDN cached

### Future Opportunities
- Image lazy loading
- Virtual scrolling (large datasets)
- OnPush change detection
- HTTP caching headers
- Bundle analysis & optimization

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| IE 11 | Any | ❌ Not supported |

---

## Deployment

### Development
```bash
ng serve --port 3000
```

### Production
```bash
# Build
ng build

# Docker
docker compose up -d --build

# URL: http://localhost:8080
```

### Build Output
- **Size**: ~2.5 MB minified
- **Compression**: Gzip ready
- **Asset hashing**: Enabled
- **Source maps**: Production excluded

---

## Code Quality Standards

### Naming Conventions
- Components: `PascalCase` (MatchesComponent)
- Services: `PascalCase` + Service suffix (FootballApiService)
- Variables: `camelCase` (filteredMatches)
- Constants: `UPPER_SNAKE_CASE` (API_BASE_URL)
- CSS classes: `kebab-case` (.filter-section)

### File Organization
```
component/
├── component-name.ts       (Logic)
├── component-name.html     (Template)
├── component-name.scss     (Styling)
└── component-name.spec.ts  (Tests)
```

### Comment Style
```typescript
// Single line comments for inline logic
/**
 * Multi-line comments for functions
 * @param param1 Description
 * @returns Description
 */
```

---

## Testing Strategy

### Unit Tests
- Component creation
- Input/output binding
- Filter logic
- API error handling
- Data normalization

### Integration Tests
- API communication
- Routing navigation
- Cross-component data flow

### E2E Tests
- User workflows
- Filter combinations
- Mobile responsiveness

---

## Security Considerations

### Current
- Angular's built-in XSS protection
- HttpClientModule (CSRF tokens)
- No sensitive data stored

### Future
- Rate limiting
- Input validation
- HTTPS enforcement
- CSP headers

---

## Dependencies

### Core
- Angular 21.2.0
- @angular/material
- @angular/platform-browser
- rxjs (Observables)

### Build
- TypeScript
- SCSS
- Webpack (Angular CLI)

### DevOps
- Docker
- Docker Compose
- Node.js 20 Alpine

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-03-31 | Initial release |
| 1.1.0 | TBD | Unit tests |
| 1.2.0 | TBD | Advanced filters |
| 2.0.0 | TBD | Detail pages |

---

## Contact & Support

**Developer**: Gordon AI Assistant
**Client**: Dr. Smits
**Repository**: C:\laragon\www\sport-analytics
**Documentation**: See README.md, USER_STORIES.md, DEPLOYMENT.md
