# Sport Analytics - Angular Voetbal Applicatie

Interactieve Single Page Application (SPA) die voetbal Wereldkampioenschap gegevens weergeeft (1930-2014).

## 🎯 Functies

- **Wedstrijden** - Doorzoek en filter WK wedstrijden op jaar en fase
- **Spelers** - Bekijk legendarische WK spelers, filter op team/positie
- **Wereldkampioenschappen** - Toernooigegevens en statistieken
- **Landen & Steden** - Zoek gastherstanden en locaties

## 🛠️ Technische Stack

- **Frontend**: Angular 21.2 (standalone components)
- **UI**: Angular Material Design
- **Styling**: SCSS
- **API**: External REST API (webteacher.nl)
- **Runtime**: Node.js 20

## 📋 Systeemvereisten

- Docker & Docker Compose (aanbevolen)
- Node.js 20+ (voor lokale ontwikkeling)
- npm 8+

## 🚀 Deployment

### Met Docker Compose (Aanbevolen)

```bash
# Bouw en start de container
docker compose up -d

# App is beschikbaar op http://localhost:8080
```

### Lokale Ontwikkeling

```bash
# Installeer dependencies
npm install

# Start dev server
ng serve

# Navigeer naar http://localhost:4200
```

### Production Build

```bash
# Bouw voor production
npm run build

# Output in dist/sport-analytics
```

## 📁 Projectstructuur

```
sport-analytics/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── matches/
│   │   │   ├── players/
│   │   │   ├── worldcups/
│   │   │   └── countries/
│   │   ├── services/
│   │   │   └── football-api.ts
│   │   ├── app.ts
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   └── index.html
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
└── README.md
```

## 🔌 API Endpoints

- `https://webteacher.nl/voetbal/json.php?data=matches`
- `https://webteacher.nl/voetbal/json.php?data=players`
- `https://webteacher.nl/voetbal/json.php?data=worldcups`
- `https://webteacher.nl/voetbal/json.php?data=worldcities`

## 📊 Functies

### Matches Pagina
- Tabel met alle wedstrijden
- Filter op jaar (dropdown)
- Filter op fase (dropdown)
- Resultaatweergave (WIN/LOSS/DRAW)
- Responsive tabeldesign

### Players Pagina
- Kaarten met spelersgegevens
- Filter op team
- Filter op positie
- Combineerbare filters
- Visual shirt number badges

### Worldcups Pagina
- Tournament cards
- Winner, runners-up, 3rd plaats
- Statistieken (goals, teams, matches)
- Responsieve grid layout

### Countries Pagina
- Zoek naar land of stad
- Coordinaten weergave (lat/lng)
- Real-time search
- Kaarten met locatiegegevens

## 🧪 Testen

```bash
# Unit tests
ng test

# Build test
ng build
```

## 📝 User Stories

Zie `USER_STORIES.md` voor volledige project backlog en story points.

## 🐳 Docker Commands

```bash
# Start container
docker compose up -d

# Stop container
docker compose down

# Logs bekijken
docker compose logs -f sport-analytics

# Container rebuilden
docker compose up -d --build

# Container verwijderen
docker compose down -v
```

## 🌐 URLs

- **Lokaal (Development)**: http://localhost:4200
- **Docker Production**: http://localhost:8080
- **API**: https://webteacher.nl/voetbal/json.php

## 📄 Licentie

MIT

## 👨‍💼 Project Info

- **Client**: Dr. Smits
- **Status**: In Development
- **Datum**: 2024
