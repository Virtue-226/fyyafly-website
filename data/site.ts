/**
 * Owner configuration.
 * Replace empty social URLs with official profiles before launch.
 * An empty href keeps the icon visible without linking to a guessed account.
 * Set contactEmail to the studio inbox to let the contact form open a draft.
 */
export const site = {
  name: "FYYAFLY",
  legalName: "Fyyafly",
  descriptor: "Creative Agency / Media / Culture",
  tagline: "Make Your Brand Impossible to Ignore.",
  copyright: "© 2025 Fyyafly. All rights reserved.",
  contactEmail: "",
  social: [
    { label: "Instagram", href: "" },
    { label: "YouTube", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "X", href: "" },
    { label: "TikTok", href: "" },
  ],
} as const;

export type SocialLink = (typeof site.social)[number];
