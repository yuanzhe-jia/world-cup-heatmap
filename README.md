# World Cup Heatmap

A single-page, lightweight web application that visualizes FIFA World Cup participation history as an interactive world heatmap. The darker the color, the more appearances a country has made in the tournament.

## Features

- **Interactive World Map**: Click any country to view detailed World Cup participation history
- **Heatmap Visualization**: Color gradient from light to dark
- **Detailed Country Drawer**: Slide-out panel showing complete participation history for each nation
- **Comprehensive Data**: Covers all World Cup tournaments from 1930 to 2026
- **Pure Frontend**: No backend required, all data embedded in the application

## Tech Stack

| Technology | Purpose | Rationale |
|------------|---------|-----------|
| **HTML/CSS/JavaScript** | Entire application | Lightweight, fast, no framework overhead |
| **ECharts** | World map + heatmap rendering | Built-in world map support, native heatmap visualization, rich interactivity |
| **Static JSON** | Data storage | Zero network latency, fully offline-capable |
| **CSS3 + CSS Variables** | Theming | Easy dark theme implementation, maintainable code |

## Project Structure

```
world-cup-heatmap/
├── index.html             # Main HTML file
├── css/
│   ├── style.css          # Global styles
│   └── drawer.css         # Drawer panel styles
├── js/
│   ├── data.js            # World Cup dataset (1930-2026)
│   ├── map.js             # ECharts map initialization
│   ├── drawer.js          # Drawer panel logic
│   └── app.js             # Main application controller
├── README.md              # This file
├── LICENSE                # MIT License
└── .gitignore             # Git ignore rules
```

## Data Architecture

The application contains comprehensive World Cup data for 79 countries:

```javascript
{
  "Brazil": {
    code: "BR",
    appearances: 23,
    firstAppearance: 1930,
    lastAppearance: 2026,
    confederation: "CONMEBOL",
    titles: 5,
    history: [
      { year: 1930, host: "Uruguay", finish: "Group Stage" },
      { year: 1934, host: "Italy", finish: "Round of 16" },
      // ... all tournaments
    ]
  }
}
```

## Installation

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

## Deployment

### Vercel

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

Push to your repository and enable GitHub Pages in repository settings.

## Technical Implementation

### Heatmap Configuration

The heatmap uses a continuous color gradient:
- **Minimum (1 appearance)**: `#F5E6CA` (Soft Champagne)
- **Maximum (23 appearances)**: `#6B1D2B` (Deep Burgundy)
- **Gradient**: `#F5E6CA` → `#D4A574` → `#A8624A` → `#6B1D2B`

### Color Scheme (Dark Theme)

| Element | Color | Hex Value |
|---------|-------|-----------|
| Page Background | Deep Charcoal | `#0A0A0F` |
| Map Base | Dark Gray-Blue | `#1A1A2E` |
| Accent (Gold) | Gold | `#C9A84C` |
| Primary Text | White | `#FFFFFF` |
| Secondary Text | Light Gray | `#A0A0B0` |
| Drawer Background | Dark Surface | `#14141F` |

### Drawer Interaction

The country detail drawer features:
- **Trigger**: Click on any country in the map
- **Animation**: 300ms slide-in from right edge
- **Content**: Country flag, name, total appearances, first/last appearance, titles, and complete participation history
- **Close**: Click background overlay or close button (✕)

### Performance Optimization

| Strategy | Implementation |
|----------|----------------|
| **Lazy Loading** | ECharts and map data loaded after initial page render |
| **CDN Caching** | ECharts library and GeoJSON served via CDN |
| **Data Compression** | JSON data minified for smaller file size |
| **Zero API Calls** | All data embedded, no network requests |
| **CSS Animation** | Uses `transform` and `opacity` for GPU acceleration |
