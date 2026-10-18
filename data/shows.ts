export type Show = {
  slug: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  alt: string;
  summary: string;
};

export const shows: Show[] = [
  {
    slug: "flyya-street",
    title: "Flyya Street",
    description: "Real conversations. Bigger dreams.",
    cta: "Watch latest episode",
    image: "/images/show-street.jpg",
    alt: "A man in a blue hoodie stands on a city street at night",
    summary:
      "Street conversations with people building something of their own. The series stays close to the person, the block and the ambition.",
  },
  {
    slug: "made-the-hard-way",
    title: "Made the Hard Way",
    description: "Founder stories. Raw & uncut.",
    cta: "Watch series",
    image: "/images/show-founder.jpg",
    alt: "A woman looks upward, lit from the side against a dark background",
    summary:
      "Founder portraits told without the highlight reel. The series stays with the difficult parts of building a brand.",
  },
  {
    slug: "the-brand-experiment",
    title: "The Brand Experiment",
    description: "Ordinary products. Extraordinary ideas.",
    cta: "Watch series",
    image: "/images/show-experiment.jpg",
    alt: "Hands hold a yellow-green bottle under teal and amber studio light",
    summary:
      "A series that takes ordinary products and pushes the idea until it becomes something people want to watch.",
  },
];

export function getShow(slug: string) {
  return shows.find((show) => show.slug === slug);
}
