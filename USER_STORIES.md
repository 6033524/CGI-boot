# Sport Analytics - Gebruikersverhalen & Vereisten

## Project Backlog

### Epic 1: Wedstrijdgegevens Visualisatie
**Verhaal 1.1: Alle wedstrijden bekijken**
- Als gebruiker wil ik alle voetbalwedstrijden van 1930-2014 zien
- Zodat ik de geschiedenis van het Wereldkampioenschap kan doorbladeren
- Acceptatiecriteria:
  - Wedstrijden weergeven in een gegevenstabel
  - Toon jaar, fase, stad, teams en score
  - Laad gegevens van externe API (webteacher.nl)
  - Toon laadspinner terwijl gegevens worden opgehaald
  - Foutmelding weergeven als API mislukt
  - Valse terug naar mockgegevens in dev-omgeving

**Verhaal 1.2: Wedstrijden filteren op jaar**
- Als gebruiker wil ik wedstrijden filteren op Wereldkampioenschap jaar
- Zodat ik wedstrijden van specifieke toernooien kan zien
- Acceptatiecriteria:
  - Vervolgkeuzelijst toont alle beschikbare jaren
  - Filter werkt in real-time
  - "Alle jaren" optie om filter opnieuw in te stellen
  - Soepele overgangen tussen gefilterde weergaven

**Verhaal 1.3: Wedstrijden filteren op fase**
- Als gebruiker wil ik wedstrijden filteren op toernooi fase
- Zodat ik specifieke wedstrijdtypen kan zien (Finale, Halve Finale, etc)
- Acceptatiecriteria:
  - Vervolgkeuzelijst toont beschikbare fasen
  - Meervoudig filterondersteuning (jaar + fase)
  - Resultaattelling werkt correct

---

### Epic 2: Speelgegevens Beheer
**Verhaal 2.1: Alle spelers bekijken**
- Als gebruiker wil ik legendarische Wereldkampioenschap spelers zien
- Zodat ik meer kan leren over speelersgeschiedenis
- Acceptatiecriteria:
  - Spelers weergeven in kaartrooster
  - Toon naam, team, positie, shirtnummer, trainer
  - Visuele speelersrugnummer badge
  - Responsieve rasterlay-out

**Verhaal 2.2: Spelers filteren op team**
- Als gebruiker wil ik spelers filteren op land
- Zodat ik spelers van specifieke teams kan zien
- Acceptatiecriteria:
  - Teamfilter vervolgkeuzelijst ingevuld uit gegevens
  - Real-time filter updates
  - Resultaattelling toont

**Verhaal 2.3: Spelers filteren op positie**
- Als gebruiker wil ik spelers filteren op positie
- Zodat ik specifieke speelerstypes kan zien
- Acceptatiecriteria:
  - Positiefilter werkt onafhankelijk
  - Gecombineerde filters werken samen
  - Resetknop wist alle filters

---

### Epic 3: Toernooiinformatie
**Verhaal 3.1: Wereldkampioenschappen bekijken**
- Als gebruiker wil ik informatie over Wereldkampioenschap toernooien zien
- Zodat ik toernooiresultaten en statistieken kan zien
- Acceptatiecriteria:
  - Toernooikaarten met resultaten weergeven
  - Toon winnaar, finalisten, derde plaats
  - Statistieken weergeven (doelpunten, teams, wedstrijden)
  - Kaarten met aantrekkelijk visueel ontwerp

---

### Epic 4: Geografische Informatie
**Verhaal 4.1: Landen & steden zoeken**
- Als gebruiker wil ik Wereldkampioenschap gastherlanden/steden zoeken
- Zodat ik toernooilocaties kan vinden
- Acceptatiecriteria:
  - Zoeken op landnaam
  - Zoeken op stadnaam
  - Coördinaten weergeven (lat/lng)
  - Real-time zoekresultaten
  - Zoeken wissen knop

---

### Epic 5: Gebruikerservaring
**Verhaal 5.1: Responsief ontwerp**
- Als gebruiker wil ik dat de applicatie op alle apparaten werkt
- Zodat ik het op mobiel, tablet en desktop kan gebruiken
- Acceptatiecriteria:
  - Mobiele breekpunt op 768px
  - Tablet optimalisaties
  - Desktop lay-out
  - Touch-vriendelijke navigatie

**Verhaal 5.2: Navigatie**
- Als gebruiker wil ik duidelijke navigatie tussen pagina's
- Zodat ik gemakkelijk tussen secties kan navigeren
- Acceptatiecriteria:
  - Header met paginakoppelingen
  - Huidige pagina markering
  - Responsief mobiel menu (toekomst)
  - Snelle toegang tot alle secties

**Verhaal 5.3: Foutafhandeling**
- Als gebruiker wil ik duidelijke foutmeldingen
- Zodat ik begrijp wat er fout gaat
- Acceptatiecriteria:
  - API-foutmeldingen weergegeven
  - Valse terug naar mockgegevens als API mislukt
  - Retry functionaliteit
  - Laad-indicatoren

---

### Epic 6: Prestaties & SEO
**Verhaal 6.1: SEO Optimalisatie**
- Als website eigenaar wil ik dat de applicatie SEO-vriendelijk is
- Zodat zoekmachines de inhoud kunnen indexeren
- Acceptatiecriteria:
  - Meta tags op alle pagina's
  - Semantische HTML structuur
  - Open Graph tags
  - Canonical URL's

**Verhaal 6.2: Prestaties**
- Als gebruiker wil ik snelle paginalaadtijden
- Zodat ik een soepele ervaring heb
- Acceptatiecriteria:
  - Initiële laadtijd < 3 seconden
  - Soepel filteren en overgangen
  - Lazy loading voor afbeeldingen
  - Geoptimaliseerde bundle grootte

---

## Technische Vereisten

### Frontend Stack
- Angular 21.2.0
- Material Design (Angular Material)
- SCSS voor styling
- Responsief ontwerp (Mobile-first)
- TypeScript

### Backend Integratie
- Externe API: https://webteacher.nl/voetbal/json.php
- Eindpunten:
  - `/voetbal/json.php?data=matches`
  - `/voetbal/json.php?data=players`
  - `/voetbal/json.php?data=worldcups`
  - `/voetbal/json.php?data=worldcities`

### Implementatie
- Docker containerisatie
- Docker Compose orkestatie
- Productie-ready configuratie

### Testen
- Unit tests voor componenten
- Service tests
- Integratietests (toekomst)

---

## Definitie van Klaar

Een gebruikersverhaal is compleet wanneer:
1. Code is geschreven en compileert zonder fouten
2. Component toont correct op alle schermformaten
3. Unit tests zijn geschreven en slagen
4. Foutafhandeling is geïmplementeerd
5. Mock data fallback werkt
6. Code review goedgekeurd
7. Gemerged naar main branch

---

## Story Points Schatting

| Verhaal | Punten |
|---------|--------|
| 1.1 | 5 |
| 1.2 | 3 |
| 1.3 | 3 |
| 2.1 | 5 |
| 2.2 | 3 |
| 2.3 | 3 |
| 3.1 | 5 |
| 4.1 | 5 |
| 5.1 | 8 |
| 5.2 | 3 |
| 5.3 | 3 |
| 6.1 | 5 |
| 6.2 | 5 |

**Totaal: 56 Story Points**

---

Gegenereerd: 31 maart 2024
