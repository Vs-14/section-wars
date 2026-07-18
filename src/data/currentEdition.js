// Demo content for PoC purposes. "Rasoi Rajneeti" is an illustrative theme
// concept, not an officially announced MAXI theme. Flip `confirmed` to true
// field-by-field once MAXI locks in the real details.
export const currentEdition = {
  year: 2025,
  theme: 'Rasoi Rajneeti',
  tagline: 'Every section a party. Every plate a promise.',
  batch: 'BM & HRM, Batch 2025-27',
  dates: 'TBC',
  venue: 'XLRI Jamshedpur Campus',
  heroImage: `${import.meta.env.BASE_URL}images/hero/section-wars-hero.svg`,
  intro:
    'Section Wars is MAXI\'s flagship inter-section festival, where every batch section becomes its own campaign, crest, and crowd. This year\'s concept, "Rasoi Rajneeti," reimagines each section as a campus food-stall party contesting for bragging rights through sport, creativity, and marketing hustle.',
  fieldStatus: {
    year: false,
    theme: false,
    tagline: false,
    batch: false,
    dates: false,
    venue: true,
    heroImage: false,
    intro: false,
  },
}
