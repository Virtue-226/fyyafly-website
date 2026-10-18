export type ServiceIconName = "target" | "camera" | "chart" | "users" | "star";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  summary: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "social-media-strategy",
    title: "Social Media Strategy & Management",
    description: "Turn followers into real customers.",
    icon: "target",
    summary:
      "Platform planning, publishing and community management shaped around the people a brand actually wants to reach.",
    includes: [
      "Channel strategy",
      "Content systems",
      "Community management",
      "Always-on publishing",
    ],
  },
  {
    slug: "creative-campaigns",
    title: "Creative Campaigns & Content Production",
    description: "Scroll-stopping content for every platform.",
    icon: "camera",
    summary:
      "Campaign ideas, films and stills produced for social, digital and larger brand platforms.",
    includes: [
      "Campaign concepts",
      "Photo and film production",
      "Social edits",
      "Platform-native content",
    ],
  },
  {
    slug: "paid-advertising",
    title: "Paid Advertising & Growth Marketing",
    description: "More reach. Better leads. Higher conversions.",
    icon: "chart",
    summary:
      "Paid media planned around the creative, so the media spend and the work are saying the same thing.",
    includes: [
      "Campaign media planning",
      "Paid social",
      "Landing-page alignment",
      "Creative testing",
    ],
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing & Brand Experiences",
    description: "Real people. Real influence.",
    icon: "users",
    summary:
      "Creator collaborations and live brand experiences built with people audiences already trust.",
    includes: [
      "Creator casting",
      "Collaboration ideas",
      "Brand experiences",
      "Community activations",
    ],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity & Digital Branding",
    description: "Build a brand people recognise and trust.",
    icon: "star",
    summary:
      "Identity, art direction and digital systems that make a brand recognisable before the logo appears.",
    includes: [
      "Visual identity",
      "Art direction",
      "Digital brand systems",
      "Campaign toolkits",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
