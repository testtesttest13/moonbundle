export type BrandName =
  | "youtube"
  | "instagram"
  | "tiktok"
  | "x"
  | "shopify"
  | "google"
  | "linkedin"
  | "wa";

const BRAND_COLOR: Record<BrandName, string> = {
  youtube: "#ef4444",
  instagram: "#d946ef",
  tiktok: "#22d3ee",
  x: "#ffffff",
  shopify: "#95bf47",
  google: "#4285f4",
  linkedin: "#0a66c2",
  wa: "#22c55e",
};

export function BrandIcon({ name, size = 14 }: { name: BrandName; size?: number }) {
  const color = BRAND_COLOR[name];
  const common = { width: size, height: size } as const;
  switch (name) {
    case "youtube":
      return (
        <svg {...common} viewBox="0 0 24 24" fill={color} aria-hidden>
          <path d="M21.6 7.2s-.2-1.4-.8-2C20 4.4 19.2 4.4 18.9 4.3 16.1 4.1 12 4.1 12 4.1h0s-4.1 0-6.9.2c-.3.1-1.1.1-1.9.9-.6.6-.8 2-.8 2s-.2 1.7-.2 3.3v1.5c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.1 6.6.2 6.6.2s4.1 0 6.9-.2c.3-.1 1.1-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.7.2-3.3v-1.5c0-1.7-.2-3.3-.2-3.3zM9.7 14.6v-5.7l5.3 2.9-5.3 2.8z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill={color} />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common} viewBox="0 0 24 24" fill={color} aria-hidden>
          <path d="M19.6 6.8a5 5 0 0 1-3.1-1.1 5 5 0 0 1-1.5-2.6h-3v11.4a2.5 2.5 0 1 1-1.8-2.4V9.1a5.5 5.5 0 1 0 4.8 5.4V9.1a8 8 0 0 0 4.6 1.4v-3c0 0-0 .2 0 .3z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common} viewBox="0 0 24 24" fill={color} aria-hidden>
          <path d="M18 3h3l-7.5 8.6L22 21h-6.7l-5-6.4L4.3 21H1.3l8-9.2L1 3h6.8l4.5 5.9L18 3zm-1.2 16.2h1.7L7.3 4.7H5.5l11.3 14.5z" />
        </svg>
      );
    case "shopify":
      return (
        <svg {...common} viewBox="0 0 24 24" fill={color} aria-hidden>
          <path d="M15.3 4.5c-.1 0-.8.2-.8.2s-.7-.7-.8-.8c-.2-.2-.5-.1-.6-.1 0 0-.1 0-.3.1-.2-.7-.7-1.4-1.6-1.4h-.1c-.3-.3-.6-.5-.9-.5-2.2 0-3.2 2.7-3.5 4.1-.9.3-1.5.5-1.6.5-.5.2-.5.2-.6.7C4.4 7.7 3 19 3 19l10.4 2 5.6-1.2s-3.6-13.2-3.7-13.3zM11.3 5c-.3.1-.7.2-1.1.4 0-.6-.1-1.4-.4-2.1.9.1 1.4 1.1 1.5 1.7zm-1.8-1.5c.3.8.4 1.8.3 2.5l-1.5.5c.3-1.1 1-1.8 1.2-3zm-.8-.7c.2 0 .4.1.5.2-.4.2-.8.7-1.1 1.4-.2.5-.3 1-.4 1.4l-1.3.4c.3-1.2 1.1-3.4 2.3-3.4z" />
        </svg>
      );
    case "google":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <path fill="#4285F4" d="M22.5 12.2c0-.8-.1-1.5-.2-2.3H12v4.3h5.9c-.3 1.4-1 2.5-2.2 3.3v2.8h3.6c2.1-1.9 3.2-4.8 3.2-8.1z" />
          <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.8c-1 .7-2.3 1.1-3.7 1.1-2.8 0-5.2-1.9-6.1-4.5H2.2v2.8C4 20.4 7.8 23 12 23z" />
          <path fill="#FBBC05" d="M5.9 14.1c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1V7.1H2.2C1.4 8.6 1 10.3 1 12s.4 3.4 1.2 4.9l3.7-2.8z" />
          <path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1C17.4 2.1 14.9 1 12 1 7.8 1 4 3.6 2.2 7.1l3.7 2.8C6.8 7.3 9.2 5.4 12 5.4z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} viewBox="0 0 24 24" fill={color} aria-hidden>
          <path d="M20.4 3H3.6C3.3 3 3 3.3 3 3.6v16.8c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6V3.6c0-.3-.3-.6-.6-.6zM8.3 18.3H5.7V9.8h2.6v8.5zM7 8.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.6h-2.6V14c0-1 0-2.2-1.4-2.2s-1.5 1.1-1.5 2.2v4.3h-2.6V9.8h2.5v1.2c.4-.7 1.2-1.4 2.5-1.4 2.6 0 3.1 1.7 3.1 4v4.7z" />
        </svg>
      );
    case "wa":
      return (
        <svg {...common} viewBox="0 0 24 24" fill={color} aria-hidden>
          <path d="M17.5 14.2c-.3-.1-1.7-.8-2-1s-.4-.1-.6.1c-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.3s.9 2.7 1.1 2.9c.1.1 1.9 2.9 4.6 4 .7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.2-.1-.3-.1-.5-.1zM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.2-1.1l-.3-.2-3 .8.8-3-.2-.3A8.3 8.3 0 1 1 12 20.3z" />
        </svg>
      );
  }
}

export function BrandChip({ name, size = 32 }: { name: BrandName; size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/10 bg-navy-900/60"
      style={{
        width: size,
        height: size,
        color: BRAND_COLOR[name],
        boxShadow: "inset 0 1px 0 rgba(255,255,255,.04)",
      }}
    >
      <BrandIcon name={name} size={Math.round(size * 0.5)} />
    </span>
  );
}
