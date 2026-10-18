import type { SVGProps } from "react";
import type { ServiceIconName } from "@/data/services";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function IconTarget(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCamera(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8.5h3.2l1.3-2h7l1.3 2H20v9.5H4V8.5z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

export function IconChart(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 19h16" />
      <path d="M7 16v-4" />
      <path d="M12 16V8" />
      <path d="M17 16v-6" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="9" r="2.4" />
      <circle cx="16" cy="10" r="2" />
      <path d="M4.8 18.5c.6-2.4 2.4-3.6 4.2-3.6s3.6 1.2 4.2 3.6" />
      <path d="M14 15.1c1.2-.4 2.5-.2 3.4.8.7.8 1.2 1.7 1.6 2.6" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.8l2.1 4.4 4.8.7-3.5 3.4.8 4.8L12 15l-4.2 2.1.8-4.8L5.1 8.9l4.8-.7L12 3.8z" />
    </svg>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9 7.5v9l8-4.5-8-4.5z" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconYouTube(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="7" width="18" height="10" rx="2.5" />
      <path d="M11 10.2v3.6l3.4-1.8-3.4-1.8z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 10.5V16" />
      <path d="M8 8h.01" />
      <path d="M12 16v-3.2c0-1 .8-1.8 1.8-1.8S15.5 11.8 15.5 12.8V16" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function IconTikTok(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 6.5c.6 1.6 1.8 2.7 3.5 3.1" />
      <path d="M14 6.5v8.2a3.6 3.6 0 1 1-3.2-3.6" />
    </svg>
  );
}

const serviceIcons = {
  target: IconTarget,
  camera: IconCamera,
  chart: IconChart,
  users: IconUsers,
  star: IconStar,
};

export function ServiceGlyph({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = serviceIcons[name];
  return <Icon className={className} />;
}

const socialIcons = {
  Instagram: IconInstagram,
  YouTube: IconYouTube,
  LinkedIn: IconLinkedIn,
  X: IconX,
  TikTok: IconTikTok,
};

export function SocialGlyph({
  name,
  className,
}: {
  name: keyof typeof socialIcons;
  className?: string;
}) {
  const Icon = socialIcons[name];
  return <Icon className={className} />;
}
