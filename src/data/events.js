// Example activity types, not a confirmed current-edition schedule.
// These reflect formats Section Wars has traditionally run; MAXI has not
// confirmed a 2025 event list at the time of writing.
export const events = [
  {
    id: 'tug-of-war',
    title: 'Tug of War',
    category: 'Physical',
    shortDescription:
      'A straight-strength showdown between sections — the classic closer of every sports block.',
    image: `${import.meta.env.BASE_URL}images/events/tug-of-war.png`,
    edition: 'Example',
    confirmed: false,
  },
  {
    id: 'dodgeball',
    title: 'Dodgeball',
    category: 'Physical',
    shortDescription:
      'Fast, chaotic, and a fan favourite — sections field their quickest reflexes for elimination rounds.',
    image: `${import.meta.env.BASE_URL}images/events/dodgeball.png`,
    edition: 'Example',
    confirmed: false,
  },
  {
    id: 'treasure-hunt',
    title: 'Campus Treasure Hunt',
    category: 'Physical',
    shortDescription:
      'Clue-based teams race across campus, blending trivia, puzzles and a bit of sprinting.',
    image: `${import.meta.env.BASE_URL}images/events/treasure-hunt.png`,
    edition: 'Example',
    confirmed: false,
  },
  {
    id: 'brand-campaign',
    title: 'Creative Branding Challenge',
    category: 'Creative',
    shortDescription:
      'Sections design a campaign identity from scratch — posters, jingles, and a pitch to back it up.',
    image: `${import.meta.env.BASE_URL}images/events/brand-campaign.webp`,
    edition: 'Example',
    confirmed: false,
  },
  {
    id: 'street-play',
    title: 'Street Play',
    category: 'Creative',
    shortDescription:
      'Short, punchy performances staged in the open, usually built around the year\'s theme.',
    image: `${import.meta.env.BASE_URL}images/events/street-play.webp`,
    edition: 'Example',
    confirmed: false,
  },
  {
    id: 'mock-marketing-pitch',
    title: 'Mock Marketing Pitch',
    category: 'Marketing',
    shortDescription:
      'Sections pitch their section "brand" to a panel, judged on positioning, wit and delivery.',
    image: `${import.meta.env.BASE_URL}images/events/mock-marketing-pitch.png`,
    edition: 'Example',
    confirmed: false,
  },
  {
    id: 'social-buzz',
    title: 'Social Media Buzz Challenge',
    category: 'Marketing',
    shortDescription:
      'A short window to generate the loudest, most creative online push for a section\'s campaign.',
    image: `${import.meta.env.BASE_URL}images/events/social-buzz.png`,
    edition: 'Example',
    confirmed: false,
  },
]

export const eventCategories = ['Physical', 'Creative', 'Marketing']
