# React + TypeScript + Vite

# 🌱 AgriCool

A hyper-local crop marketplace where neighbors can buy and sell fresh produce directly — flat ₱20 listing fee, no middleman, face-to-face meetups.

---

## Tech Stack

- **React** + **Vite**
- **Chakra UI v3** — component library
- **React Hook Form** — form state and validation

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## Project Structure

```
src/
├── components/
│   ├── CropListings.tsx      # Marketplace card grid (flexbox, 3-col)
│   ├── CropCard.tsx          # Individual crop card
│   ├── AddCropsForm.tsx      # Drawer wrapper with form state
│   ├── FormFields.tsx        # React Hook Form fields
│   └── SeasonBar.tsx         # Monthly peak season indicator
├── data/
│   ├── cropData.ts           # Marketplace dummy data + helpers (buildMeta, buildInitials, buildTheme)
│   └── almanacData.ts        # Almanac crop reference data (season, tips, stats)
└── types/
    └── index.ts              # Shared types (CropCategory, CATEGORY_THEME, UNIT_OPTIONS)
```

---

## Features

### Marketplace
- Browse crop listings in a 3-column card grid
- Add a new listing via a slide-in drawer
- Category filter chips to narrow results
- Card colors are derived from crop category — no hardcoded themes per card

### Almanac
- Reference guide for common crops grown in the area
- Per-crop info: harvest time, planting window, yield, water needs
- Monthly peak season bar (12-pip visual indicator)
- Growing tips per crop

---

## Key Conventions

**Color theming** is driven by `CATEGORY_THEME` in `types/index.ts`. Assign a `category` to a crop and `buildTheme(category)` returns the correct `emoji`, `bg`, `avatarBg`, and `avatarColor` automatically.

**Meta string** is constructed from two fields — `variety` and `quantity` — using `buildMeta(variety, quantity)`, which produces e.g. `"Fresh harvest · 5kg"`.

**IDs** use `crypto.randomUUID()` — no external library needed.

**Season data** is typed as a fixed tuple of 12 booleans (one per month, Jan–Dec). TypeScript enforces the length at compile time.

---

## Notes

This is a demo app. Data is not persisted — refreshing the page resets listings to the dummy data.