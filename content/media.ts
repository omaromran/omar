/**
 * Media paths for headshots, work imagery, and press.
 * Drop files into /public/images as described in README.
 */

const imagesBase = '/images';

export const media = {
  headshot: {
    primary: `${imagesBase}/headshot.png`,
    alt: `${imagesBase}/headshot-alt.png`,
  },
  og: `${imagesBase}/og-cover.jpg`,
  /** Optional hero background (blurred, low opacity) */
  heroBg: `${imagesBase}/hero-bg.png`,
  work: {
    sixflags: `${imagesBase}/work/sixflags-1.png`,
    welbilt: `${imagesBase}/work/welbilt-1.jpg`,
    middleby: `${imagesBase}/work/middleby-1.jpg`,
    vibe: `${imagesBase}/work/vibe-1.jpg`,
    alliancesLogos: `${imagesBase}/work/alliances-logos.png`,
  },
  /** Optional: per-role gallery (array of paths) */
  galleries: {
    sixflags: [] as string[],
    welbilt: [] as string[],
    middleby: [] as string[],
    vibe: [] as string[],
  },
  /** Optional: press source logo paths (keyed by source name) */
  pressLogos: {} as Record<string, string>,
} as const;

export type WorkImageKey = keyof typeof media.work;
