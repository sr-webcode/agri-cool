import { CATEGORY_THEME, CropCategory } from './types';

export function buildMeta(variety: string, quantity: string) {
  return `${variety} · ${quantity}`;
}

export function buildInitials(seller: string) {
  return seller
    .split(' ')
    .map((w) => w[0]?.toUpperCase() ?? '')
    .slice(0, 2)
    .join('');
}

export function buildTheme(category: CropCategory) {
  const theme = CATEGORY_THEME[category];
  return {
    emoji: theme.emoji,
    bg: theme.bg,
    avatarBg: theme.avatarBg,
    avatarColor: theme.avatarColor,
  };
}
