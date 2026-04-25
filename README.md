# Newton School Clone

A frontend clone of the **Newton School of Technology** Learning Management System (LMS), built with React and Vite. This project recreates the core UI of the platform including the dashboard, arena, leaderboard, calendar, scorecard, timeline, tryouts, and QOTD pages.

> **Disclaimer:** This project is built strictly for **academic and educational purposes**. It is not affiliated with, endorsed by, or connected to Newton School of Technology in any way. All data shown is mock/placeholder data.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 8** | Build tool & dev server |
| **Sass / SCSS** | Styling (page-specific + global) |
| **@newtonschool/grauity** | Icon library & design system |
| **Vanilla CSS** | Global styles & landing page |

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Landing (Home) | Banner carousel, course cards, default navbar |
| `/dashboard` | Dashboard | 3-column grid layout — Sidebar, Main Feed (tasks/deadlines), Right Widgets (QOTD, calendar) |
| `/arena` | Arena | LeetCode-style problem list with search, filters, tabs, pagination, and progress tracking |
| `/leaderboard` | Leaderboard | Podium visualization + ranked table with XP, change indicators, and user avatars |
| `/calendar` | Calendar | Weekly schedule grid with time rows, event overlap handling, and week navigation |
| `/scorecard` | Scorecard | Subject grades table with marks, percentages, and weightage breakdown |
| `/timeline` | My Timeline | Chronological list of lectures and activities with completion status |
| `/tryouts` | Tryouts | Interview practice landing page with feature highlights and tryout cards |
| `/qotd` | Question of the Day | Daily coding challenge page with live timer, streak tracking, and leaderboard |

---

## Project Structure

```
NewtonSchool_Clone/
├── index.html                         # SPA entry point
├── vite.config.js                     # Vite + React plugin config, SCSS deprecation silencing
├── package.json
│
└── src/
    ├── main.jsx                       # Entry — path-based routing
    ├── App.jsx                        # Landing page shell (Navbar + HostPage)
    ├── index.css                      # Global styles (landing, navbar, cards)
    │
    ├── assets/                        # Static images & favicon
    │   ├── arena_banner_bg.png
    │   ├── bannerBg.png
    │   ├── bannerBg2.png
    │   ├── favicon.svg
    │   └── image.png
    │
    ├── components/
    │   ├── Navbar.jsx                 # Dual-variant navbar (default / dashboard)
    │   └── dashboard/
    │       ├── Sidebar.jsx            # Navigation sidebar with subjects & nav links
    │       ├── MainFeed.jsx           # Dashboard main feed (tasks, deadlines)
    │       └── RightWidgets.jsx       # QOTD widget, calendar widget
    │
    ├── data/
    │   └── mockData.js                # Centralized mock data for all components
    │
    └── pages/
        ├── HostPage.jsx               # Landing: carousel + course card
        ├── Dashboard.jsx / .css       # Dashboard layout shell + styles
        ├── ArenaPage.jsx / .scss      # Problem list page
        ├── LeaderboardPage.jsx / .scss# Rank table + podium
        ├── CalendarPage.jsx / .scss   # Weekly schedule grid
        ├── ScoreCardPage.jsx / .scss  # Subject grades table
        ├── TimelinePage.jsx / .scss   # Activity timeline
        ├── TryoutsPage.jsx / .scss    # Interview practice page
        └── QOTDPage.jsx / .scss       # Question of the Day
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (v9+)

### Installation

```bash
git clone https://github.com/sohamdhande/NewtonSchool_Clone.git
cd NewtonSchool_Clone
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Routing

The app uses a simple path-based routing mechanism in `main.jsx` via `window.location.pathname`. Navigation between pages triggers full page reloads using `window.location.href`.

| Path | Component |
|---|---|
| `/` | `App` (Landing) |
| `/dashboard` | `Dashboard` |
| `/arena` | `ArenaPage` |
| `/leaderboard` | `LeaderboardPage` |
| `/calendar` | `CalendarPage` |
| `/scorecard` | `ScoreCardPage` |
| `/timeline` | `TimelinePage` |
| `/tryouts` | `TryoutsPage` |
| `/qotd` | `QOTDPage` |

---

## Layout Architecture

### Landing Page
Simple vertical stack — default Navbar on top, HostPage content below.

### Dashboard Pages (Dashboard, Arena, Leaderboard, Calendar, ScoreCard, Timeline)
CSS Grid layout with a consistent structure:
```
┌──────────────────────────────────────┐
│            Navbar (64px)             │
├──────────┬───────────────────────────┤
│ Sidebar  │       Main Content       │
│ (240px)  │         (1fr)            │
└──────────┴───────────────────────────┘
```

### Standalone Pages (QOTD, Tryouts)
Full-width layout with the default Navbar variant.

---

## Design System

- **Font:** Nunito Sans (via Google Fonts CDN)
- **Icons:** `@newtonschool/grauity` — `NSIcon` component used throughout
- **Colors:** CSS custom properties defined in `Dashboard.css`, with page-specific tokens in individual SCSS files
- **Styling approach:** Mix of global CSS (`index.css`), page-scoped CSS/SCSS, and inline styles

---

## Academic Purpose

This project was created as a learning exercise to practice:

- **React component architecture** — Building reusable, composable UI components
- **CSS Grid & Flexbox layouts** — Implementing complex multi-column dashboard layouts
- **SCSS preprocessing** — Using nested selectors, variables, and modular stylesheets
- **Frontend design patterns** — Recreating a production-grade UI from reference
- **Mock data management** — Structuring and consuming static data across components

---

## License

This project is for **educational purposes only**. Not intended for commercial use or distribution.
