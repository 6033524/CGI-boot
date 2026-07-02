# Wireframes & Design Document - Sport Analytics

## Design System

### Kleuren Palette

```
Primary: #1976d2 (Material Blue)
Primary Dark: #1565c0
Secondary: #2e7d32 (Green)
Error: #c62828 (Red)
Warning: #f57f17 (Orange)
Success: #2e7d32 (Green)

Text Dark: #333333
Text Light: #666666
Border: #eeeeee
Background: #ffffff
```

### Typografie

```
Font Family: Roboto (Google Fonts)
- Headings: 600 weight
- Body: 400 weight
- Small text: 12px

Font Sizes:
- h1: 32px
- h2: 24px
- h3: 18px
- body: 14px
- small: 12px
```

### Spacing Scale

```
0px, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
```

### Icons

- Material Icons (Google)
- Size: 24px standard, 48px large
- Color: Primary blue or text colors

---

## Responsive Breakpoints

```
Mobile:   < 768px   (width: 100%, single column)
Tablet:   768px-1023px (width: 100%, optimized for landscape)
Desktop:  >= 1024px (full layout with sidebars)
```

---

## Page Wireframes

### 1. Header/Navigation

```
┌─────────────────────────────────────────────────┐
│ ⚽ Sport Analytics    [Matches] [Players] [WC] [Countries] │
└─────────────────────────────────────────────────┘

Components:
- Logo + title (left)
- Navigation links (center/right)
- Active page indicator (underline)
```

**Responsive**:
- Desktop: Horizontal nav
- Mobile: Hamburger menu (future)

---

### 2. Matches Page

#### Desktop Layout

```
┌──────────────────────────────────┐
│ Football Matches                 │
│ Browse all World Cup matches...   │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ [Year Dropdown] [Stage Dropdown]  │
│ [Reset Button]                    │
│ Showing 64 of 892 matches         │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ Year  Stage    City    Teams Score│
├──────────────────────────────────┤
│ 2014  Final    Rio     GER vs ARG  1-0
│ 2014  Semi     SP      GER vs BRA  7-1
│ 2010  Final    Jo      ESP vs NED  1-0
│ 2010  Semi     CT      URU vs NED  3-2
│...                              ...
└──────────────────────────────────┘
```

#### Tablet Layout

```
┌──────────────────────────────────┐
│ Football Matches                 │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ [Year]  [Stage]                  │
│ [Reset]                          │
│ 64 of 892                        │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ Year Stage City   Teams     Score │
├──────────────────────────────────┤
│ 2014 Final Rio    GER vs ARG 1-0  │
│ 2014 Semi  SP     GER vs BRA 7-1  │
│...                             ...│
└──────────────────────────────────┘
```

#### Mobile Layout

```
┌─────────────────────┐
│ Football Matches   │
│                    │
│ [Year ▼]           │
│ [Stage ▼]          │
│ [Reset]            │
│ 64 of 892          │
│                    │
│ ┌────────────────┐ │
│ │ 2014 Final     │ │
│ │ Rio            │ │
│ │ GER vs ARG     │ │
│ │ 1-0 WIN        │ │
│ └────────────────┘ │
│                    │
│ ┌────────────────┐ │
│ │ 2014 Semi      │ │
│ │ SP             │ │
│ │ GER vs BRA     │ │
│ │ 7-1 WIN        │ │
│ └────────────────┘ │
└─────────────────────┘
```

---

### 3. Players Page

#### Desktop Layout

```
┌──────────────────────────────────┐
│ Players                          │
│ Browse legendary World Cup...    │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ [Team Filter] [Position Filter]   │
│ [Reset]                          │
│ 1024 of 18256 players            │
└──────────────────────────────────┘

┌────────────────┬────────────────┬─────────────┐
│ ┌────────────┐ │ ┌────────────┐ │ ┌─────────┐ │
│ │     10     │ │ │     7      │ │ │    5    │ │
│ │ Pelé       │ │ │ Ronaldo    │ │ │Beckenbau│ │
│ │ BRA        │ │ │ POR        │ │ │ GER     │ │
│ │ Forward    │ │ │ Forward    │ │ │Defender │ │
│ │ Coach: VF  │ │ │ Coach: CQ  │ │ │Coach: HS│ │
│ └────────────┘ │ └────────────┘ │ └─────────┘ │
└────────────────┴────────────────┴─────────────┘

┌────────────────┬────────────────┬─────────────┐
│ ┌────────────┐ │ ┌────────────┐ │ ┌─────────┐ │
│ │     10     │ │ │     10     │ │ │    7    │ │
│ │ Messi      │ │ │ Maradona   │ │ │Ronaldini│ │
│...                                            ...
└────────────────┴────────────────┴─────────────┘
```

#### Mobile Layout

```
┌─────────────────────┐
│ Players            │
│                    │
│ [Team Filter ▼]    │
│ [Position Filter▼] │
│ [Reset]            │
│ 1024 of 18256      │
│                    │
│ ┌────────────────┐ │
│ │ 10 Pelé        │ │
│ │ BRA - Forward  │ │
│ │ Coach: VF      │ │
│ └────────────────┘ │
│ ┌────────────────┐ │
│ │  7 Ronaldo     │ │
│ │ POR - Forward  │ │
│ │ Coach: CQ      │ │
│ └────────────────┘ │
│...                │
└─────────────────────┘
```

---

### 4. Worldcups Page

#### Desktop Layout

```
┌──────────────────────────────────┐
│ World Cups                       │
│ Tournaments from 1930 to 2014    │
└──────────────────────────────────┘

┌────────────────┬────────────────┬─────────────┐
│ ┌────────────┐ │ ┌────────────┐ │ ┌─────────┐ │
│ │ World Cup  │ │ │ World Cup  │ │ │World Cup│ │
│ │ #21        │ │ │ #20        │ │ │  #19    │ │
│ │ Brazil     │ │ │ SA         │ │ │Germany  │ │
│ │            │ │ │            │ │ │         │ │
│ │ Winner     │ │ │ Winner     │ │ │ Winner  │ │
│ │ Germany    │ │ │ Spain      │ │ │ Italy   │ │
│ │ 2nd: ARG   │ │ │ 2nd: NED   │ │ │2nd:FRA  │ │
│ │ 3rd: NED   │ │ │ 3rd: GER   │ │ │3rd: GER │ │
│ │            │ │ │            │ │ │         │ │
│ │ ⚽ 171 G   │ │ │ ⚽ 145 G   │ │ │⚽ 147 G │ │
│ │ 👥 32 T    │ │ │ 👥 32 T    │ │ │👥 32 T  │ │
│ │ ⚔️ 64 M    │ │ │ ⚔️ 64 M    │ │ │⚔️ 64 M  │ │
│ └────────────┘ │ └────────────┘ │ └─────────┘ │
└────────────────┴────────────────┴─────────────┘
```

#### Mobile Layout

```
┌─────────────────────┐
│ World Cups         │
│                    │
│ ┌────────────────┐ │
│ │ World Cup #21  │ │
│ │ Brazil         │ │
│ │ Winner:Germany │ │
│ │ 2nd: ARG       │ │
│ │ 3rd: NED       │ │
│ │ ⚽ 171 Goals   │ │
│ │ 👥 32 Teams    │ │
│ │ ⚔️ 64 Matches  │ │
│ └────────────────┘ │
│ ┌────────────────┐ │
│ │ World Cup #20  │ │
│ │ South Africa   │ │
│ │ Winner: Spain  │ │
│ │ 2nd: NED       │ │
│ │ 3rd: GER       │ │
│ │ ⚽ 145 Goals   │ │
│ │ 👥 32 Teams    │ │
│ │ ⚔️ 64 Matches  │ │
│ └────────────────┘ │
└─────────────────────┘
```

---

### 5. Countries Page

#### Desktop Layout

```
┌──────────────────────────────────┐
│ Countries & Cities               │
│ World Cup host cities...         │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ 🔍 [Search by country or city]  │
│ 42 countries found               │
└──────────────────────────────────┘

┌────────────────┬────────────────┬─────────────┐
│ ┌────────────┐ │ ┌────────────┐ │ ┌─────────┐ │
│ │ B          │ │ │ B          │ │ │ D      │ │
│ │ Rio        │ │ │ São Paulo  │ │ │ Berlin  │ │
│ │ Brazil     │ │ │ Brazil     │ │ │Germany  │ │
│ │ -22.91°    │ │ │ -23.55°    │ │ │ 52.52° │ │
│ │ -43.17°    │ │ │ -46.63°    │ │ │13.40°  │ │
│ └────────────┘ │ └────────────┘ │ └─────────┘ │
└────────────────┴────────────────┴─────────────┘
```

#### Mobile Layout

```
┌─────────────────────┐
│ Countries & Cities │
│                    │
│ 🔍 [Search...]     │
│ 42 countries       │
│                    │
│ ┌────────────────┐ │
│ │ B  Rio         │ │
│ │    Brazil      │ │
│ │    -22.91°     │ │
│ │    -43.17°     │ │
│ └────────────────┘ │
│ ┌────────────────┐ │
│ │ B  São Paulo   │ │
│ │    Brazil      │ │
│ │    -23.55°     │ │
│ │    -46.63°     │ │
│ └────────────────┘ │
│...                │
└─────────────────────┘
```

---

## Component Spacing

### Header
- Height: 56px
- Padding: 12px 16px
- Logo: Left, 16px margin
- Nav: Right, 8px item spacing

### Main Content
- Max-width: 1200px
- Padding: 20px
- Section margin: 40px bottom

### Filter Section
- Background: White
- Padding: 20px
- Margin: 30px bottom
- Border-radius: 8px
- Shadow: 0 2px 4px rgba(0,0,0,0.08)

### Tables
- Row height: 48px
- Cell padding: 16px
- Header bg: Linear gradient blue
- Hover: Light gray

### Cards
- Padding: 20px
- Border-radius: 8px
- Margin: 20px
- Shadow: 0 2px 8px rgba(0,0,0,0.1)
- Hover shadow: 0 4px 16px rgba(0,0,0,0.15)

---

## Interaction Patterns

### Filters
- Dropdown changes trigger immediate update
- Results count updates in real-time
- Reset button available always
- Visual feedback on selection

### Search
- Real-time as user types
- Debounce: 300ms
- Case-insensitive
- No results: Show helpful message

### Loading States
- Spinner in center
- "Loading..." text below
- Full opacity blocking

### Error States
- Red icon + message
- Retry button available
- Copy error for support

---

## Accessibility Features

### Keyboard Navigation
- Tab order logical (top-left to bottom-right)
- Enter/Space to activate buttons
- Arrow keys for dropdowns
- Escape to close menus

### Color Contrast
- Text vs background: 7.2:1 ratio (WCAG AAA)
- No color-only indicators
- Icons have fallback labels

### Touch Targets
- Minimum 44x44px (mobile)
- 48px preferred
- Spacing between targets: 8px

---

## Animation & Transitions

### Page Transitions
- Duration: 300ms
- Easing: ease-in-out
- Fade in/out

### Hover Effects
- Cards: Slight elevation + shadow
- Buttons: Background color change
- Links: Underline appear

### Filter Updates
- Smooth reflow
- 200ms transition
- No layout shift

---

## Design System Usage

### Buttons

```html
<!-- Primary -->
<button mat-raised-button color="primary">Save</button>

<!-- Secondary -->
<button mat-stroked-button>Cancel</button>

<!-- Icon -->
<button mat-icon-button>
  <mat-icon>settings</mat-icon>
</button>
```

### Form Fields

```html
<mat-form-field>
  <mat-label>Select Year</mat-label>
  <mat-select>
    <mat-option value="2014">2014</mat-option>
  </mat-select>
</mat-form-field>
```

### Cards

```html
<div class="card">
  <div class="card-header">Title</div>
  <div class="card-body">Content</div>
</div>
```

---

**Design Version**: 1.0
**Last Updated**: 31 maart 2024
**Designed by**: Gordon (AI Assistant)
