// Real Section Wars celebration media. `type` is 'image' or 'video'; the
// gallery grid and lightbox branch on it. For videos, `thumbnail` points at
// the clip itself (the browser renders its first frame as the poster).
export const gallery = [
  {
    id: 'sw-photo-01',
    type: 'image',
    image: `${import.meta.env.BASE_URL}images/gallery/section-wars-01.jpg`,
    thumbnail: `${import.meta.env.BASE_URL}images/gallery/section-wars-01.jpg`,
    altText: 'Section Wars participants celebrating with the trophy under fairy lights',
    caption: 'Trophy night — celebrating the close of Section Wars.',
    edition: null,
  },
  {
    id: 'sw-photo-02',
    type: 'image',
    image: `${import.meta.env.BASE_URL}images/gallery/section-wars-02.jpg`,
    thumbnail: `${import.meta.env.BASE_URL}images/gallery/section-wars-02.jpg`,
    altText: 'Section Wars participants cheering together on the lawn at night',
    caption: 'Section Wars night, under the fairy lights.',
    edition: null,
  },
  {
    id: 'sw-clip-01',
    type: 'video',
    image: `${import.meta.env.BASE_URL}images/gallery/section-wars-clip-01.mp4`,
    thumbnail: `${import.meta.env.BASE_URL}images/gallery/section-wars-clip-01.mp4`,
    altText: 'Video clip from the Section Wars celebrations',
    caption: 'Live from the Section Wars celebrations.',
    edition: null,
  },
  {
    id: 'sw-clip-02',
    type: 'video',
    image: `${import.meta.env.BASE_URL}images/gallery/section-wars-clip-02.mp4`,
    thumbnail: `${import.meta.env.BASE_URL}images/gallery/section-wars-clip-02.mp4`,
    altText: 'Another video clip from the Section Wars celebrations',
    caption: 'More from the Section Wars night.',
    edition: null,
  },
]
