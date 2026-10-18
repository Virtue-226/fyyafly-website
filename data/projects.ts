export type Project = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  story: string;
};

export const projects: Project[] = [
  {
    slug: "energy-in-every-move",
    category: "Product Campaign",
    title: "Energy in Every Move",
    description: "A high-energy campaign for a beverage brand.",
    image: "/images/work-energy.jpg",
    alt: "A woman in sunglasses holds a blue drink against a saturated orange background",
    story:
      "A product campaign built around movement, colour and the feeling of a brand that refuses to sit still. The pictures, edits and social cuts share one visual language.",
  },
  {
    slug: "the-next-generation",
    category: "Brand Storytelling",
    title: "The Next Generation",
    description: "Real stories. Real ambition. Real people.",
    image: "/images/work-generation.jpg",
    alt: "Two people dressed in black walk toward the camera on a city street",
    story:
      "A storytelling series about ambition as it actually looks: on the street, in motion, and told by the people living it. No staged gloss, no invented ending.",
  },
  {
    slug: "behind-the-scenes",
    category: "Content Production",
    title: "Behind the Scenes",
    description: "What goes into creating great content.",
    image: "/images/work-bts.jpg",
    alt: "A camera crew films a shot on a city street in daylight",
    story:
      "A production piece that shows the work behind the work: the crew, the setup and the decisions that turn an idea into something people stop for.",
  },
  {
    slug: "the-fyyafly-takeover",
    category: "Experiential Campaign",
    title: "The Fyyafly Takeover",
    description: "A brand activation that brought the city together.",
    image: "/images/work-takeover.jpg",
    alt: "A concert crowd faces a stage lit in pink and magenta",
    story:
      "An experiential campaign designed as a city moment: music, people and a brand showing up in the same room. The live energy is the media.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
