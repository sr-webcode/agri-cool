export const CATEGORY_THEME = {
  leafy: {
    label: 'Leafy Greens',
    emoji: '🥬',
    bg: '#f0fdf4',
    avatarBg: '#dcfce7',
    avatarColor: '#166534',
    // e.g. pechay, kangkong, petsay, alugbati, pipino, sitaw
  },
  fruit_veg: {
    label: 'Fruit Vegetables',
    emoji: '🍅',
    bg: '#fff7ed',
    avatarBg: '#fee2e2',
    avatarColor: '#991b1b',
    // e.g. kamatis, talong, ampalaya, upo, patola
  },
  root: {
    label: 'Root Crops',
    emoji: '🥕',
    bg: '#fff7ed',
    avatarBg: '#ffedd5',
    avatarColor: '#9a3412',
    // e.g. karot, kamote, gabi, singkamas, labanos
  },
  allium: {
    label: 'Alliums',
    emoji: '🧅',
    bg: '#fdf4ff',
    avatarBg: '#fae8ff',
    avatarColor: '#7e22ce',
    // e.g. sibuyas, bawang, leeks
  },
  brassica: {
    label: 'Brassicas',
    emoji: '🥦',
    bg: '#f0fdf4',
    avatarBg: '#dcfce7',
    avatarColor: '#166534',
    // e.g. broccoli, cauliflower, repolyo, petsay wombok
  },
  pepper: {
    label: 'Peppers & Chili',
    emoji: '🫑',
    bg: '#f0fdf4',
    avatarBg: '#dcfce7',
    avatarColor: '#166534',
    // e.g. bell pepper, siling labuyo, siling haba
  },
  corn_grain: {
    label: 'Corn & Grains',
    emoji: '🌽',
    bg: '#fef9c3',
    avatarBg: '#fef9c3',
    avatarColor: '#854d0e',
    // e.g. sweet corn, mais, munggo
  },
  herb: {
    label: 'Herbs & Aromatics',
    emoji: '🌿',
    bg: '#f0fdf4',
    avatarBg: '#dcfce7',
    avatarColor: '#166534',
    // e.g. luya, tanglad, dahon ng bay, kulantro
  },
} as const;

export type CropCategory = keyof typeof CATEGORY_THEME;

// ─── Controlled unit options ──────────────────────────────────────────────────
// Prevents junk values — user picks from this list only.
export const UNIT_OPTIONS = [
  'kg',
  'pc',
  'bundle',
  'tray',
  'sack',
  '100g',
  'g',
  'liter',
] as const;

export type CropUnit = (typeof UNIT_OPTIONS)[number];

// ─── Form shape ───────────────────────────────────────────────────────────────
export type AddCropFormValues = {
  name: string; // "Pechay"
  variety: string; // "Fresh harvest"  ↘ combined into
  quantity: string; // "5kg"            ↗ meta: "Fresh harvest · 5kg"
  price: number;
  unit: CropUnit;
  category: CropCategory;
  seller: string;
  km: number;
};
