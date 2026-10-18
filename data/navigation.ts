export type NavItem = {
  label: string;
  href: string;
  section?: string;
  match?: string[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", section: "top" },
  {
    label: "Services",
    href: "/#services",
    section: "services",
    match: ["/services"],
  },
  {
    label: "Our Work",
    href: "/#work",
    section: "work",
    match: ["/work"],
  },
  {
    label: "Fyyafly Media",
    href: "/#media",
    section: "media",
    match: ["/media"],
  },
  { label: "About", href: "/about", match: ["/about"] },
  { label: "Insights", href: "/insights", match: ["/insights"] },
  { label: "Partnerships", href: "/partnerships", match: ["/partnerships"] },
];

export const footerNav: NavItem[] = [
  ...navItems,
  { label: "Contact", href: "/contact", match: ["/contact"] },
];
